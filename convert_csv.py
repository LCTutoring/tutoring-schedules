#!/usr/bin/env python3
import csv
import sys
import re

def normalize_time(time_str):
    """Remove leading zeros from hours (01:15 -> 1:15)"""
    if not time_str or time_str == "CLOSED":
        return time_str
    
    # Replace leading zeros before colons: 01:15 -> 1:15, 09:30 -> 9:30
    # But keep AM/PM intact
    def replace_leading_zero(match):
        return match.group(1).lstrip('0') or '0'
    
    # Match 0X: patterns (one or more digits followed by colon)
    normalized = re.sub(r'(\d{1,2}):', lambda m: (str(int(m.group(1))) + ':'), time_str)
    return normalized

def normalize_course_name(course_name):
    return re.sub(r'\bprecalculus\b', 'Precalculus', course_name, flags=re.IGNORECASE)

# Read the CSV file
csv_file = sys.argv[1] if len(sys.argv) > 1 else "/Users/matthew/Desktop/job/Fall2026_Tutor_Schedules_ADA(Tutor Schedules) (2).csv"

data = []
with open(csv_file, 'r', encoding='cp1252') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Skip empty rows
        if not row.get("Campus") or not row.get("Course Number"):
            continue
        
        entry = {
            "courseCode": row["Course Number"].strip(),
            "courseName": normalize_course_name(row["Course Name"].strip()),
            "campus": row["Campus"].strip(),
            "tutorName": row["Tutor Name"].strip(),
            "days": {
                "Monday": normalize_time(row["Monday"].strip()) if row["Monday"].strip() else "CLOSED",
                "Tuesday": normalize_time(row["Tuesday"].strip()) if row["Tuesday"].strip() else "CLOSED",
                "Wednesday": normalize_time(row["Wednesday"].strip()) if row["Wednesday"].strip() else "CLOSED",
                "Thursday": normalize_time(row["Thursday"].strip()) if row["Thursday"].strip() else "CLOSED",
                "Friday": normalize_time(row["Friday"].strip()) if row["Friday"].strip() else "CLOSED"
            }
        }
        data.append(entry)

# Generate JavaScript code
js_code = """/*
  ============================================
  TUTOR SCHEDULE DATA
  ============================================
  This file was rebuilt directly from the Excel file:
  Fall2026_Tutor_Schedules_ADA.xlsm

  HOW TO EDIT THIS FILE:
  - Each item below represents one row from the Excel sheet.
  - If the Excel sheet has two separate rows for the same tutor/course,
    keep them as two separate entries here too.
  - Days must stay exactly like this:
      Monday, Tuesday, Wednesday, Thursday, Friday

  TIP:
  - If you want the website to match the spreadsheet exactly,
    update the Excel sheet first, then update this file from it.

*/



const AVAILABLE_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const TUTOR_SCHEDULE_DATA =
[
"""

# Organize data by campus and course
campuses = {}
for entry in data:
    campus = entry["campus"]
    if campus not in campuses:
        campuses[campus] = {}
    
    course_code = entry["courseCode"]
    if course_code not in campuses[campus]:
        campuses[campus][course_code] = []
    
    campuses[campus][course_code].append(entry)

# Generate organized output
for campus in sorted(campuses.keys()):
    js_code += f"\n  // ============================================================\n"
    js_code += f"  // {campus.upper()} CAMPUS\n"
    js_code += f"  // ============================================================\n"
    
    for course_code in sorted(campuses[campus].keys()):
        js_code += f"\n  // ---- {course_code} ----\n"
        
        for entry in campuses[campus][course_code]:
            js_code += "  {\n"
            js_code += f'      "courseCode": "{entry["courseCode"]}",\n'
            js_code += f'      "courseName": "{entry["courseName"]}",\n'
            js_code += f'      "campus": "{entry["campus"]}",\n'
            js_code += f'      "tutorName": "{entry["tutorName"]}",\n'
            js_code += '      "days": {\n'
            
            for day in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]:
                time_str = entry["days"][day]
                # Replace newlines with proper formatting
                time_str = time_str.replace('\n', ' & ')
                js_code += f'          "{day}": "{time_str}"'
                if day != "Friday":
                    js_code += ",\n"
                else:
                    js_code += "\n"
            
            js_code += "      }\n"
            js_code += "  },\n"

js_code += "\n];\n"

# Write to file
with open("data.js", 'w') as f:
    f.write(js_code)

print("✓ data.js has been updated successfully!")
print(f"✓ Total entries: {len(data)}")
print(f"✓ Campuses: {', '.join(sorted(campuses.keys()))}")

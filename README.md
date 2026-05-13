# Tutor Schedule Finder
**UTRGV Learning Center**

A simple, searchable tutor schedule website. Office Aids can search by course, by day of the week, and by campus. No frameworks, no build tools — just plain HTML, CSS, and JavaScript.

---

## Files in this folder

| File | What it does | Do you edit it? |
|------|-------------|-----------------|
| `data.js` | All tutor schedule data | ✅ Yes — this is the main one |
| `index.html` | Page structure and layout | ⚠️ Only for text/label changes |
| `style.css` | Colors, fonts, and spacing | ⚠️ Only for visual changes |
| `script.js` | Search and filter logic | 🚫 Leave this alone |
| `a11y-widget.js` | Accessibility panel (font size, contrast, etc.) | 🚫 Leave this alone |

---

## The only file you regularly edit: `data.js`

Every tutor schedule entry looks like this:

```js
{
  "courseCode": "MATH 2413",
  "courseName": "Calculus I",
  "campus": "Edinburg",
  "tutorName": "Jane Smith",
  "days": {
    "Monday":    "9:00am - 12:00pm",
    "Tuesday":   "OFF",
    "Wednesday": "9:00am - 12:00pm",
    "Thursday":  "OFF",
    "Friday":    "9:00am - 10:00am"
  }
},
```

### Field reference

| Field | What to put here | Example |
|-------|-----------------|---------|
| `courseCode` | The official course number | `"MATH 2413"` |
| `courseName` | The full course name | `"Calculus I"` |
| `campus` | Must be exactly one of these two values | `"Edinburg"` or `"Brownsville"` |
| `tutorName` | Full name as it should appear on the site | `"Jane Smith"` |
| `days` | Schedule for each day — all five days required | See below |

### Valid day values

| Value | Meaning |
|-------|---------|
| `"9:00am - 12:00pm"` | Available during those hours |
| `"10:00am - 1:00pm & 3:00pm - 5:00pm"` | Two time blocks — separate with ` & ` |
| `"OFF"` | Not available that day |
| `"BROWNSVILLE"` | At the other campus that day |
| `"EDINBURG"` | At the other campus that day |
| `"Lead Training"` | In lead training |
| `"Lead Duties"` | Performing lead tutor duties |
| `"Mentor Duties"` | Performing SI/CSHR mentor duties |
| `"Calendar"` | Schedule varies — check the shared calendar |

### Rules to follow

- **All five days must be present** in every entry, even if the value is `"OFF"`. Never delete a day.
- **Always use double quotes** `" "` around every value — not single quotes.
- **Every entry ends with a comma** `},` — except the very last entry in the file.
- **Two rows for the same tutor/course is intentional** — some tutors have split schedules in the original spreadsheet. Keep both rows.

---

## Common edits

**Update a tutor's hours**
Find their entry by name and course code, change the time value for the day.

**Add a new tutor**
Copy an existing entry, paste it after the last entry for that course, fill in the new name and hours. Make sure the entry above ends with `},`.

**Mark a tutor as unavailable**
Change the time value to `"OFF"` for that day.

**Remove a tutor**
Delete the entire block from the opening `{` to the closing `},` (including the comma). Be careful not to accidentally delete part of the next entry.

---

## Features

- **Search by course** — type a course code like `MATH 2413` or a subject like `Calculus`
- **Search by day** — type `Monday`, `Tuesday`, etc. to see who's available
- **Filter by campus** — pill buttons in the header: `All`, `Edinburg`, `Brownsville`
- **Combine filters** — course + day + campus all work together
- **Accessibility widget** — floating ♿ button in the bottom-left corner with options for high contrast, dyslexia font, reduced motion, grayscale, and text size scaling. Preferences are saved so they persist across page loads.

---

## Saving changes with GitHub

After editing `data.js`, run these four commands in your terminal from inside the project folder:

```bash
git status                          # 1. check what changed
git add .                           # 2. stage all changes
git commit -m "Update schedules"    # 3. save with a short message
git push                            # 4. send to GitHub
```

If `git push` is rejected, someone else pushed first. Run `git pull` and then `git push` again.

**First-time setup** — if Git asks who you are, run these once:
```bash
git config --global user.email "you@utrgv.edu"
git config --global user.name "Your Name"
```

---

## Hosting

This site is hosted on **GitHub Pages**. The file that loads first is `index.html`. All five files must stay in the same folder for the site to work correctly.

---

## Project structure

```
tutor-schedule/
├── index.html          ← page structure
├── style.css           ← colors, fonts, layout
├── data.js             ← all tutor schedule data  ← EDIT THIS
├── script.js           ← search and filter logic
├── a11y-widget.js      ← accessibility panel
└── README.md           ← this file
```
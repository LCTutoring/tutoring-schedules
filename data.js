/*
  ============================================
  TUTOR SCHEDULE DATA
  ============================================
  This file was rebuilt directly from the Excel file:
  Tutor_Schedules_ADA.xlsm

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

  // ============================================================
  // EDINBURG CAMPUS
  // ============================================================

  // ---- ACCT 2301 ----
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Tuesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Wednesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Thursday": "12:00pm - 1:00pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "ACCT 2301",
    "courseName": "Intro to Financial Acct",
    "campus": "Edinburg",
    "tutorName": "Sebastian Sanchez Reyes (Lead Tutor)",
    "days": {
      "Monday": "11:30pm - 12:30pm",
      "Tuesday": "11:30pm - 1:00pm",
      "Wednesday": "11:30pm - 1:00pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ACCT 2302 ----
  {
    "courseCode": "ACCT 2302",
    "courseName": "Intro to Managerial Acct",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Tuesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Wednesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Thursday": "12:00pm - 1:00pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "ACCT 2302",
    "courseName": "Intro to Managerial Acct",
    "campus": "Edinburg",
    "tutorName": "Sebastian Sanchez Reyes (Lead Tutor)",
    "days": {
      "Monday": "11:30pm - 12:30pm",
      "Tuesday": "11:30pm - 1:00pm",
      "Wednesday": "11:30pm - 1:00pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 1310 ----
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "9:00am - 1:30pm",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 1:30pm",
      "Thursday": "12:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 1320 ----
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "9:00am - 1:30pm",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 1:30pm",
      "Thursday": "12:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 2310 ----
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "9:00am - 1:30pm",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 1:30pm",
      "Thursday": "12:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 3310 ----
  {
    "courseCode": "ASLI 3310",
    "courseName": "ASL IV",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "9:00am - 1:30pm",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 1:30pm",
      "Thursday": "12:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 3320 ----
  {
    "courseCode": "ASLI 3320",
    "courseName": "ASL V",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "9:00am - 1:30pm",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 1:30pm",
      "Thursday": "12:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 3325 ----
  {
    "courseCode": "ASLI 3325",
    "courseName": "Interpreting I",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "9:00am - 1:30pm",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 1:30pm",
      "Thursday": "12:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 3345 ----
  {
    "courseCode": "ASLI 3345",
    "courseName": "Interpreting II",
    "campus": "Edinburg",
    "tutorName": "Gabrielle Houston",
    "days": {
      "Monday": "9:00am - 1:30pm",
      "Tuesday": "9:00am - 1:30pm",
      "Wednesday": "9:00am - 1:30pm",
      "Thursday": "12:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 1406 ----
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 1407 ----
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 2401 ----
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 2402 ----
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 3313 ----
  {
    "courseCode": "BIOL 3313",
    "courseName": "Genetics",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 3315 ----
  {
    "courseCode": "BIOL 3315",
    "courseName": "Cell & Molecular Biology",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BMED 1301 ----
  {
    "courseCode": "BMED 1301",
    "courseName": "Intro to Biomedical Sci I",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- BMED 1302 ----
  {
    "courseCode": "BMED 1302",
    "courseName": "Intro to Biomedical Sci II",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 1111 ----
  {
    "courseCode": "CHEM 1111",
    "courseName": "General Chemistry I Lab",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "CHEM 1111",
    "courseName": "General Chemistry I Lab",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 1112 ----
  {
    "courseCode": "CHEM 1112",
    "courseName": "General Chemistry II Lab",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "CHEM 1112",
    "courseName": "General Chemistry II Lab",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 1311 (Edinburg) ----
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 1312 ----
  {
    "courseCode": "CHEM 1312",
    "courseName": "General Chemistry II",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "CHEM 1312",
    "courseName": "General Chemistry II",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 2123 ----
  {
    "courseCode": "CHEM 2123",
    "courseName": "Organic Chemistry I Lab",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "CHEM 2123",
    "courseName": "Organic Chemistry I Lab",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 2125 ----
  {
    "courseCode": "CHEM 2125",
    "courseName": "Organic Chemistry II Lab",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 2323 ----
  {
    "courseCode": "CHEM 2323",
    "courseName": "Organic Chemistry I",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "CHEM 2323",
    "courseName": "Organic Chemistry I",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 2325 ----
  {
    "courseCode": "CHEM 2325",
    "courseName": "Organic Chemistry II",
    "campus": "Edinburg",
    "tutorName": "Jorge Gonzalez",
    "days": {
      "Monday": "9:00am - 12:00pm",
      "Tuesday": "9:00am - 12:00pm",
      "Wednesday": "9:00am - 12:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 3303 ----
  {
    "courseCode": "CHEM 3303",
    "courseName": "Biochemistry I",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 3387 ----
  {
    "courseCode": "CHEM 3387",
    "courseName": "Biochemistry I Honors",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CSCI 1470 ----
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "11:30am - 12:45pm & 2:15pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ECON 2301 ----
  {
    "courseCode": "ECON 2301",
    "courseName": "Principles of Macroeconomics",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Tuesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Wednesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Thursday": "12:00pm - 1:00pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ECON 2302 ----
  {
    "courseCode": "ECON 2302",
    "courseName": "Principles of Microeconomics",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Tuesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Wednesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Thursday": "12:00pm - 1:00pm",
      "Friday": "CLOSED"
    }
  },

  // ---- EECE 2306 ----
  {
    "courseCode": "EECE 2306",
    "courseName": "Digital Systems Engineering I",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "9:30am - 12:45pm",
      "Tuesday": "9:30am - 3:30pm",
      "Wednesday": "9:30am - 3:30pm",
      "Thursday": "3:00pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- EECE 2106 ----
  {
    "courseCode": "EECE 2106",
    "courseName": "Digital Systems Engineering I Lab",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "9:30am - 12:45pm",
      "Tuesday": "9:30am - 3:30pm",
      "Wednesday": "9:30am - 3:30pm",
      "Thursday": "3:00pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- HESI Prep ----
  {
    "courseCode": "HESI Prep",
    "courseName": "Anatomy & Physiology",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Critical Thinking",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Grammar",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Mathematics",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Reading Comprehension",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Vocabulary",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 1314, 1414 ----
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "9:30am - 12:45pm",
      "Tuesday": "9:30am - 3:30pm",
      "Wednesday": "9:30am - 3:30pm",
      "Thursday": "3:00pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "11:30am - 12:45pm & 2:15pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Edinburg",
    "tutorName": "Srinidhi Sompalli",
    "days": {
      "Monday": "12:00pm - 3:00pm",
      "Tuesday": "10:00am - 1:00pm",
      "Wednesday": "10:00am - 1:00pm",
      "Thursday": "11:30am - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 1324 ----
  {
    "courseCode": "MATH 1324",
    "courseName": "Math for Business",
    "campus": "Edinburg",
    "tutorName": "Sebastian Sanchez Reyes (Lead Tutor)",
    "days": {
      "Monday": "11:30pm - 12:30pm",
      "Tuesday": "11:30pm - 1:00pm",
      "Wednesday": "11:30pm - 1:00pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 1342 ----
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Tuesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Wednesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Thursday": "12:00pm - 1:00pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 1343 ----
  {
    "courseCode": "MATH 1343",
    "courseName": "Introduction to Biostatistics",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Tuesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Wednesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Thursday": "12:00pm - 1:00pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 2412 ----
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "11:30am - 12:45pm & 2:15pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 2413 ----
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "9:30am - 12:45pm",
      "Tuesday": "9:30am - 3:30pm",
      "Wednesday": "9:30am - 3:30pm",
      "Thursday": "3:00pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "11:30am - 12:45pm & 2:15pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon (Lead Tutor)",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:30pm - 3:15pm",
      "Wednesday": "12:30pm - 3:15pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 2414 ----
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "9:30am - 12:45pm",
      "Tuesday": "9:30am - 3:30pm",
      "Wednesday": "9:30am - 3:30pm",
      "Thursday": "3:00pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Edinburg",
    "tutorName": "Eduardo Bello Gonzalez",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "11:30am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "11:30am - 12:45pm & 2:15pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 2415 ----
  {
    "courseCode": "MATH 2415",
    "courseName": "Calculus III",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon (Lead Tutor)",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:30pm - 3:15pm",
      "Wednesday": "12:30pm - 3:15pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MECE 1101 ----
  {
    "courseCode": "MECE 1101",
    "courseName": "Intro to Mechanical Engineering",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "9:30am - 12:45pm",
      "Tuesday": "9:30am - 3:30pm",
      "Wednesday": "9:30am - 3:30pm",
      "Thursday": "3:00pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MECE 2301 ----
  {
    "courseCode": "MECE 2301",
    "courseName": "Statics",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon (Lead Tutor)",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:30pm - 3:15pm",
      "Wednesday": "12:30pm - 3:15pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MECE 2302 ----
  {
    "courseCode": "MECE 2302",
    "courseName": "Dynamics",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon (Lead Tutor)",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:30pm - 3:15pm",
      "Wednesday": "12:30pm - 3:15pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MECE 2340 ----
  {
    "courseCode": "MECE 2340",
    "courseName": "Engineering Materials",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon (Lead Tutor)",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:30pm - 3:15pm",
      "Wednesday": "12:30pm - 3:15pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MECE 2340",
    "courseName": "Engineering Materials",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "9:30am - 12:45pm",
      "Tuesday": "9:30am - 3:30pm",
      "Wednesday": "9:30am - 3:30pm",
      "Thursday": "3:00pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MECE 2140 ----
  {
    "courseCode": "MECE 2140",
    "courseName": "Engineering Materials Lab",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "9:30am - 12:45pm",
      "Tuesday": "9:30am - 3:30pm",
      "Wednesday": "9:30am - 3:30pm",
      "Thursday": "3:00pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MECE 3335 ----
  {
    "courseCode": "MECE 3335",
    "courseName": "Thermodynamics I",
    "campus": "Edinburg",
    "tutorName": "Angelina Anthony",
    "days": {
      "Monday": "9:30am - 12:45pm",
      "Tuesday": "9:30am - 3:30pm",
      "Wednesday": "9:30am - 3:30pm",
      "Thursday": "3:00pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- NURSING ----
  {
    "courseCode": "NURSING",
    "courseName": "1st Semester",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "2nd Semester",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "3rd Semester",
    "campus": "Edinburg",
    "tutorName": "Francisco Nunez",
    "days": {
      "Monday": "OFF",
      "Tuesday": "10:30am - 3:30pm",
      "Wednesday": "10:30am - 3:30pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- PHYS 2425 ----
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon (Lead Tutor)",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:30pm - 3:15pm",
      "Wednesday": "12:30pm - 3:15pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- PHYS 2426 ----
  {
    "courseCode": "PHYS 2426",
    "courseName": "Physics for Sci & Engr II",
    "campus": "Edinburg",
    "tutorName": "Ethan De Leon (Lead Tutor)",
    "days": {
      "Monday": "OFF",
      "Tuesday": "12:30pm - 3:15pm",
      "Wednesday": "12:30pm - 3:15pm",
      "Thursday": "1:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- QUMT 2341 ----
  {
    "courseCode": "QUMT 2341",
    "courseName": "Business Stats I",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Tuesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Wednesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Thursday": "12:00pm - 1:00pm",
      "Friday": "CLOSED"
    }
  },

  // ---- QUMT 2341 ----
  {
    "courseCode": "QUMT 2341",
    "courseName": "Business Stats I",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Tuesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Wednesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Thursday": "12:00pm - 1:00pm",
      "Friday": "CLOSED"
    }
  },

  // ---- QUMT 3341 ----
  {
    "courseCode": "QUMT 3341",
    "courseName": "Business Stats II",
    "campus": "Edinburg",
    "tutorName": "Alexis Aguilar",
    "days": {
      "Monday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Tuesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Wednesday": "9:15am - 12:15pm & 12:45pm - 3:30pm",
      "Thursday": "12:00pm - 1:00pm",
      "Friday": "CLOSED"
    }
  },

  // ============================================================
  // BROWNSVILLE CAMPUS
  // ============================================================

  // ---- ASLI 1310 ----
  {
    "courseCode": "ASLI 1310",
    "courseName": "ASL I",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "12:30pm - 3:30pm",
      "Tuesday": "12:00pm - 3:30pm",
      "Wednesday": "12:30pm - 3:30pm",
      "Thursday": "12:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 1320 ----
  {
    "courseCode": "ASLI 1320",
    "courseName": "ASL II",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "12:30pm - 3:30pm",
      "Tuesday": "12:00pm - 3:30pm",
      "Wednesday": "12:30pm - 3:30pm",
      "Thursday": "12:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 2310 ----
  {
    "courseCode": "ASLI 2310",
    "courseName": "ASL III",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "12:30pm - 3:30pm",
      "Tuesday": "12:00pm - 3:30pm",
      "Wednesday": "12:30pm - 3:30pm",
      "Thursday": "12:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 3310 ----
  {
    "courseCode": "ASLI 3310",
    "courseName": "ASL IV",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "12:30pm - 3:30pm",
      "Tuesday": "12:00pm - 3:30pm",
      "Wednesday": "12:30pm - 3:30pm",
      "Thursday": "12:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 3320 ----
  {
    "courseCode": "ASLI 3320",
    "courseName": "ASL V",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "12:30pm - 3:30pm",
      "Tuesday": "12:00pm - 3:30pm",
      "Wednesday": "12:30pm - 3:30pm",
      "Thursday": "12:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ASLI 3340 ----
  {
    "courseCode": "ASLI 3340",
    "courseName": "Intro to Classifiers",
    "campus": "Brownsville",
    "tutorName": "Luz Anabel Martinez",
    "days": {
      "Monday": "12:30pm - 3:30pm",
      "Tuesday": "12:00pm - 3:30pm",
      "Wednesday": "12:30pm - 3:30pm",
      "Thursday": "12:00pm - 3:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 1406 ----
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 3:00pm",
      "Tuesday": "9:00am - 3:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "BIOL 1406",
    "courseName": "General Biology I",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "OFF",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "1:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 1407 ----
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 3:00pm",
      "Tuesday": "9:00am - 3:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "BIOL 1407",
    "courseName": "General Biology II",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "OFF",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "1:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 2401 ----
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 3:00pm",
      "Tuesday": "9:00am - 3:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "OFF",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "1:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "BIOL 2401",
    "courseName": "Anatomy & Physiology I",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:45am - 1:00pm",
      "Wednesday": "9:45am - 3:30pm",
      "Thursday": "12:00pm - 1:00pm & 4:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- BIOL 2402 ----
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "OFF",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "1:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "BIOL 2402",
    "courseName": "Anatomy & Physiology II",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:45am - 1:00pm",
      "Wednesday": "9:45am - 3:30pm",
      "Thursday": "12:00pm - 1:00pm & 4:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 1311 ----
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 3:00pm",
      "Tuesday": "9:00am - 3:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "OFF",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "1:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "CHEM 1311",
    "courseName": "General Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:45am - 1:00pm",
      "Wednesday": "9:45am - 3:30pm",
      "Thursday": "12:00pm - 1:00pm & 4:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CHEM 2323 ----
  {
    "courseCode": "CHEM 2323",
    "courseName": "Organic Chemistry I",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 3:00pm",
      "Tuesday": "9:00am - 3:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- CLSC 2429 ----
  {
    "courseCode": "CLSC 2429",
    "courseName": "Clinical Microbiology",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:45am - 1:00pm",
      "Wednesday": "9:45am - 3:30pm",
      "Thursday": "12:00pm - 1:00pm & 4:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- CSCI 1470 ----
  {
    "courseCode": "CSCI 1470",
    "courseName": "Computer Science I",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- CSCI 2380 ----
  {
    "courseCode": "CSCI 2380",
    "courseName": "Computer Science II",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- CSCI 3328 ----
  {
    "courseCode": "CSCI 3328",
    "courseName": "Object Oriented Programming in C#",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- CSCI 4334 ----
  {
    "courseCode": "CSCI 4334",
    "courseName": "Operating Systems",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "12:00pm - 4:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ECON 2301 ----
  {
    "courseCode": "ECON 2301",
    "courseName": "Principles of Macroeconomics",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "9:00am - 12:30pm",
      "Tuesday": "9:00am - 12:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- ECON 2302 ----
  {
    "courseCode": "ECON 2302",
    "courseName": "Principles of Microeconomics",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "9:00am - 12:30pm",
      "Tuesday": "9:00am - 12:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- EECE 1101 ----
  {
    "courseCode": "EECE 1101",
    "courseName": "Intro to Electric & Computer Engineering",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- EECE 2305 ----
  {
    "courseCode": "EECE 2305",
    "courseName": "Electric Circuits",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "12:00pm - 4:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- EECE 2306 ----
  {
    "courseCode": "EECE 2306",
    "courseName": "Digital Systems Engineering I",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "12:00pm - 4:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "EECE 2306",
    "courseName": "Digital Systems Engineering I",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- EECE 3321 ----
  {
    "courseCode": "EECE 3321",
    "courseName": "Signals & Systems",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- EECE 3435 ----
  {
    "courseCode": "EECE 3435",
    "courseName": "Microprocessor Systems",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "12:00pm - 4:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "EECE 3435",
    "courseName": "Microprocessor Systems",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- EECE 4303 ----
  {
    "courseCode": "EECE 4303",
    "courseName": "Digital Systems Engineering II",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- INFS 2300 ----
  {
    "courseCode": "INFS 2300",
    "courseName": "Data Modeling Management Tools",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "9:00am - 12:30pm",
      "Tuesday": "9:00am - 12:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MARK 3300 ----
  {
    "courseCode": "MARK 3300",
    "courseName": "Principles of Marketing",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "9:00am - 12:30pm",
      "Tuesday": "9:00am - 12:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 1314, 1414 ----
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "12:00pm - 3:30pm",
      "Tuesday": "11:15am - 2:45pm",
      "Wednesday": "12:00pm - 3:30pm",
      "Thursday": "12:00pm - 2:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "9:00am - 12:45pm",
      "Tuesday": "9:00am - 11:15pm",
      "Wednesday": "9:00am - 12:45pm",
      "Thursday": "3:15pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "12:00pm - 4:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 1314, 1414",
    "courseName": "College Algebra",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "OFF",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "1:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 1324 ----
  {
    "courseCode": "MATH 1324",
    "courseName": "Math for Business",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "12:00pm - 4:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 1324",
    "courseName": "Math for Business",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "9:00am - 12:30pm",
      "Tuesday": "9:00am - 12:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 1342 ----
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 3:00pm",
      "Tuesday": "9:00am - 3:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 1342",
    "courseName": "Elementary Statistical Methods",
    "campus": "Brownsville",
    "tutorName": "Samira Almaguer (Lead Tutor)",
    "days": {
      "Monday": "10:00am - 11:00am",
      "Tuesday": "10:30am - 12:30pm",
      "Wednesday": "11:30am - 1:00pm",
      "Thursday": "4:30pm - 6:00pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 1343 ----
  {
    "courseCode": "MATH 1343",
    "courseName": "Introduction to Biostatistics",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 3:00pm",
      "Tuesday": "9:00am - 3:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 2318 ----
  {
    "courseCode": "MATH 2318",
    "courseName": "Linear Algebra",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "12:00pm - 3:30pm",
      "Tuesday": "11:15am - 2:45pm",
      "Wednesday": "12:00pm - 3:30pm",
      "Thursday": "12:00pm - 2:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 2412 ----
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "12:00pm - 3:30pm",
      "Tuesday": "11:15am - 2:45pm",
      "Wednesday": "12:00pm - 3:30pm",
      "Thursday": "12:00pm - 2:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "9:00am - 12:45pm",
      "Tuesday": "9:00am - 11:15pm",
      "Wednesday": "9:00am - 12:45pm",
      "Thursday": "3:15pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "12:00pm - 4:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Joel Almaguer",
    "days": {
      "Monday": "9:00am - 3:00pm",
      "Tuesday": "9:00am - 3:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2412",
    "courseName": "Precalculus",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 2413 ----
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "12:00pm - 3:30pm",
      "Tuesday": "11:15am - 2:45pm",
      "Wednesday": "12:00pm - 3:30pm",
      "Thursday": "12:00pm - 2:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "9:00am - 12:45pm",
      "Tuesday": "9:00am - 11:15pm",
      "Wednesday": "9:00am - 12:45pm",
      "Thursday": "3:15pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "12:00pm - 4:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2413",
    "courseName": "Calculus I",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 2414 ----
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "12:00pm - 3:30pm",
      "Tuesday": "11:15am - 2:45pm",
      "Wednesday": "12:00pm - 3:30pm",
      "Thursday": "12:00pm - 2:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "9:00am - 12:45pm",
      "Tuesday": "9:00am - 11:15pm",
      "Wednesday": "9:00am - 12:45pm",
      "Thursday": "3:15pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 2414",
    "courseName": "Calculus II",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 2415 ----
  {
    "courseCode": "MATH 2415",
    "courseName": "Calculus III",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "12:00pm - 3:30pm",
      "Tuesday": "11:15am - 2:45pm",
      "Wednesday": "12:00pm - 3:30pm",
      "Thursday": "12:00pm - 2:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MATH 3341 ----
  {
    "courseCode": "MATH 3341",
    "courseName": "Differential Equations",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "12:00pm - 3:30pm",
      "Tuesday": "11:15am - 2:45pm",
      "Wednesday": "12:00pm - 3:30pm",
      "Thursday": "12:00pm - 2:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 3341",
    "courseName": "Differential Equations",
    "campus": "Brownsville",
    "tutorName": "Angel Morales",
    "days": {
      "Monday": "9:00am - 12:45pm",
      "Tuesday": "9:00am - 11:15pm",
      "Wednesday": "9:00am - 12:45pm",
      "Thursday": "3:15pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "MATH 3341",
    "courseName": "Differential Equations",
    "campus": "Brownsville",
    "tutorName": "Marcos Ontiveros (Lead Tutor)",
    "days": {
      "Monday": "1:00pm - 2:30pm",
      "Tuesday": "10:00am - 12:30pm",
      "Wednesday": "1:00pm - 3:00pm",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- MGMT 3361 ----
  {
    "courseCode": "MGMT 3361",
    "courseName": "Principles of Management",
    "campus": "Brownsville",
    "tutorName": "Jesus Munoz",
    "days": {
      "Monday": "9:00am - 12:30pm",
      "Tuesday": "9:00am - 12:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 1116 ----
  {
    "courseCode": "MUSI 1116",
    "courseName": "ET & SS I",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 1117 ----
  {
    "courseCode": "MUSI 1117",
    "courseName": "ET & SS II",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 1211 ----
  {
    "courseCode": "MUSI 1211",
    "courseName": "Music Theory I",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 1212 ----
  {
    "courseCode": "MUSI 1212",
    "courseName": "Music Theory II",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 1301 ----
  {
    "courseCode": "MUSI 1301",
    "courseName": "Fundamentals of Music",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 2116 ----
  {
    "courseCode": "MUSI 2116",
    "courseName": "ET & SS III",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 2117 ----
  {
    "courseCode": "MUSI 2117",
    "courseName": "ET & SS IV",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 2211 ----
  {
    "courseCode": "MUSI 2211",
    "courseName": "Music Theory III",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 2212 ----
  {
    "courseCode": "MUSI 2212",
    "courseName": "Music Theory IV",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- MUSI 3211 ----
  {
    "courseCode": "MUSI 3211",
    "courseName": "Musical Form & Analysis",
    "campus": "Brownsville",
    "tutorName": "Jonathan Gonzales",
    "days": {
      "Monday": "OFF",
      "Tuesday": "1:00pm - 3:30pm",
      "Wednesday": "OFF",
      "Thursday": "3:00pm - 5:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- NURSING ----
  {
    "courseCode": "NURSING",
    "courseName": "1st Semester",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "2nd Semester",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "3rd Semester",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },

  // ---- NURSING ----
  {
    "courseCode": "NURSING",
    "courseName": "1st Semester",
    "campus": "Brownsville",
    "tutorName": "Samira Almaguer (Lead Tutor)",
    "days": {
      "Monday": "10:00am - 11:00am",
      "Tuesday": "10:30am - 12:30pm",
      "Wednesday": "11:30am - 1:00pm",
      "Thursday": "4:30pm - 6:00pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "2nd Semester",
    "campus": "Brownsville",
    "tutorName": "Samira Almaguer (Lead Tutor)",
    "days": {
      "Monday": "10:00am - 11:00am",
      "Tuesday": "10:30am - 12:30pm",
      "Wednesday": "11:30am - 1:00pm",
      "Thursday": "4:30pm - 6:00pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "NURSING",
    "courseName": "3rd Semester",
    "campus": "Brownsville",
    "tutorName": "Samira Almaguer (Lead Tutor)",
    "days": {
      "Monday": "10:00am - 11:00am",
      "Tuesday": "10:30am - 12:30pm",
      "Wednesday": "11:30am - 1:00pm",
      "Thursday": "4:30pm - 6:00pm",
      "Friday": "CLOSED"
    }
  },

  // ---- PHYS 1401 ----
  {
    "courseCode": "PHYS 1401",
    "courseName": "General Physics I",
    "campus": "Brownsville",
    "tutorName": "Kevin Torres-Vega",
    "days": {
      "Monday": "11:30am - 3:30pm",
      "Tuesday": "OFF",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "1:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- PHYS 2425 ----
  {
    "courseCode": "PHYS 2425",
    "courseName": "Physics for Sci & Engr I",
    "campus": "Brownsville",
    "tutorName": "Daniel Aguirre",
    "days": {
      "Monday": "OFF",
      "Tuesday": "11:00am - 3:30pm",
      "Wednesday": "11:30am - 3:30pm",
      "Thursday": "12:00pm - 4:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- STAT 3337 ----
  {
    "courseCode": "STAT 3337",
    "courseName": "Probability & Statistics",
    "campus": "Brownsville",
    "tutorName": "Alejandra Ramos Arevalo",
    "days": {
      "Monday": "12:00pm - 3:30pm",
      "Tuesday": "11:15am - 2:45pm",
      "Wednesday": "12:00pm - 3:30pm",
      "Thursday": "12:00pm - 2:30pm",
      "Friday": "CLOSED"
    }
  },

  // ---- HESI Prep ----
  {
    "courseCode": "HESI Prep",
    "courseName": "Anatomy & Physiology",
    "campus": "Brownsville",
    "tutorName": "Samira Almaguer (Lead Tutor)",
    "days": {
      "Monday": "10:00am - 11:00am",
      "Tuesday": "10:30am - 12:30pm",
      "Wednesday": "11:30am - 1:00pm",
      "Thursday": "4:30pm - 6:00pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Critical Thinking",
    "campus": "Brownsville",
    "tutorName": "Samira Almaguer (Lead Tutor)",
    "days": {
      "Monday": "10:00am - 11:00am",
      "Tuesday": "10:30am - 12:30pm",
      "Wednesday": "11:30am - 1:00pm",
      "Thursday": "4:30pm - 6:00pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Mathematics",
    "campus": "Brownsville",
    "tutorName": "Samira Almaguer (Lead Tutor)",
    "days": {
      "Monday": "10:00am - 11:00am",
      "Tuesday": "10:30am - 12:30pm",
      "Wednesday": "11:30am - 1:00pm",
      "Thursday": "4:30pm - 6:00pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Vocabulary",
    "campus": "Brownsville",
    "tutorName": "Samira Almaguer (Lead Tutor)",
    "days": {
      "Monday": "10:00am - 11:00am",
      "Tuesday": "10:30am - 12:30pm",
      "Wednesday": "11:30am - 1:00pm",
      "Thursday": "4:30pm - 6:00pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Anatomy & Physiology",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Critical Thinking",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Mathematics",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Reading Comprehension",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Vocabulary",
    "campus": "Brownsville",
    "tutorName": "Camila Hinojosa",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:00am - 2:00pm",
      "Wednesday": "OFF",
      "Thursday": "OFF",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Anatomy & Physiology",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:45am - 1:00pm",
      "Wednesday": "9:45am - 3:30pm",
      "Thursday": "12:00pm - 1:00pm & 4:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  },
  {
    "courseCode": "HESI Prep",
    "courseName": "Mathematics",
    "campus": "Brownsville",
    "tutorName": "Ximena Navarro",
    "days": {
      "Monday": "OFF",
      "Tuesday": "9:45am - 1:00pm",
      "Wednesday": "9:45am - 3:30pm",
      "Thursday": "12:00pm - 1:00pm & 4:30pm - 6:30pm",
      "Friday": "CLOSED"
    }
  }
];
/*
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

  // ============================================================
  // BROWNSVILLE CAMPUS
  // ============================================================

  // ---- ACCT 2301 ----
  {
      "courseCode": "ACCT 2301",
      "courseName": "Intro to Financial Accounting",
      "campus": "Brownsville",
      "tutorName": "Marisa Padron",
      "days": {
          "Monday": "9:00AM - 12:00PM",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "9:00AM - 12:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ACCT 2301",
      "courseName": "Intro to Financial Accounting",
      "campus": "Brownsville",
      "tutorName": "Fernando Casanova",
      "days": {
          "Monday": "2:00PM - 5:00PM",
          "Tuesday": "9:30AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "9:30AM - 10:45AM",
          "Friday": "CLOSED"
      }
  },

  // ---- ACCT 2302 ----
  {
      "courseCode": "ACCT 2302",
      "courseName": "Intro to Managerial Accounting",
      "campus": "Brownsville",
      "tutorName": "Marisa Padron",
      "days": {
          "Monday": "9:00AM - 12:00PM",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "9:00AM - 12:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ACCT 2302",
      "courseName": "Intro to Managerial Accounting",
      "campus": "Brownsville",
      "tutorName": "Fernando Casanova",
      "days": {
          "Monday": "2:00PM - 5:00PM",
          "Tuesday": "9:30AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "9:30AM - 10:45AM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 1310 ----
  {
      "courseCode": "ASLI 1310",
      "courseName": "ASLI I",
      "campus": "Brownsville",
      "tutorName": "Luz Anabel Martinez",
      "days": {
          "Monday": "12:00PM - 5:00PM",
          "Tuesday": "11:00AM - 4:00PM",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "11:00AM - 4:00PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 1320 ----
  {
      "courseCode": "ASLI 1320",
      "courseName": "ASLI II",
      "campus": "Brownsville",
      "tutorName": "Luz Anabel Martinez",
      "days": {
          "Monday": "12:00PM - 5:00PM",
          "Tuesday": "11:00AM - 4:00PM",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "11:00AM - 4:00PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 2310 ----
  {
      "courseCode": "ASLI 2310",
      "courseName": "ASLI III",
      "campus": "Brownsville",
      "tutorName": "Luz Anabel Martinez",
      "days": {
          "Monday": "12:00PM - 5:00PM",
          "Tuesday": "11:00AM - 4:00PM",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "11:00AM - 4:00PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 3310 ----
  {
      "courseCode": "ASLI 3310",
      "courseName": "ASLI IV",
      "campus": "Brownsville",
      "tutorName": "Luz Anabel Martinez",
      "days": {
          "Monday": "12:00PM - 5:00PM",
          "Tuesday": "11:00AM - 4:00PM",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "11:00AM - 4:00PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 3320 ----
  {
      "courseCode": "ASLI 3320",
      "courseName": "ASLI V",
      "campus": "Brownsville",
      "tutorName": "Luz Anabel Martinez",
      "days": {
          "Monday": "12:00PM - 5:00PM",
          "Tuesday": "11:00AM - 4:00PM",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "11:00AM - 4:00PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 3324 ----
  {
      "courseCode": "ASLI 3324",
      "courseName": "ASL Fingerspelling & Numbers",
      "campus": "Brownsville",
      "tutorName": "Luz Anabel Martinez",
      "days": {
          "Monday": "12:00PM - 5:00PM",
          "Tuesday": "11:00AM - 4:00PM",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "11:00AM - 4:00PM",
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
          "Monday": "12:00PM - 5:00PM",
          "Tuesday": "11:00AM - 4:00PM",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "11:00AM - 4:00PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASTR 1401 ----
  {
      "courseCode": "ASTR 1401",
      "courseName": "Intro to Astronomy I",
      "campus": "Brownsville",
      "tutorName": "Ulises Jarquin",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 2:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 2:00PM",
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
          "Monday": "1:00PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "5:00PM - 7:45PM",
          "Thursday": "2:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "BIOL 1406",
      "courseName": "General Biology I",
      "campus": "Brownsville",
      "tutorName": "Kevin Torres-Vega",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "10:30AM - 2:00PM",
          "Wednesday": "9:00AM - 11:30AM",
          "Thursday": "9:00AM - 12:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "BIOL 1406",
      "courseName": "General Biology I",
      "campus": "Brownsville",
      "tutorName": "Kassandra Melendez",
      "days": {
          "Monday": "9:00AM - 2:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BIOL 1406",
      "courseName": "General Biology I",
      "campus": "Brownsville",
      "tutorName": "Sofia Munoz",
      "days": {
          "Monday": "9:30AM - 10:30AM & 2:30PM - 4:30PM",
          "Tuesday": "11:00AM - 1:00PM",
          "Wednesday": "9:30AM - 10:30AM & 6:30PM - 8:00PM",
          "Thursday": "11:00AM - 1:30PM",
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
          "Monday": "1:00PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "5:00PM - 7:45PM",
          "Thursday": "2:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "BIOL 1407",
      "courseName": "General Biology II",
      "campus": "Brownsville",
      "tutorName": "Kevin Torres-Vega",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "10:30AM - 2:00PM",
          "Wednesday": "9:00AM - 11:30AM",
          "Thursday": "9:00AM - 12:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "BIOL 1407",
      "courseName": "General Biology II",
      "campus": "Brownsville",
      "tutorName": "Kassandra Melendez",
      "days": {
          "Monday": "9:00AM - 2:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "CLOSED",
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
          "Monday": "1:00PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "5:00PM - 7:45PM",
          "Thursday": "2:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "BIOL 2401",
      "courseName": "Anatomy & Physiology I",
      "campus": "Brownsville",
      "tutorName": "Kevin Torres-Vega",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "10:30AM - 2:00PM",
          "Wednesday": "9:00AM - 11:30AM",
          "Thursday": "9:00AM - 12:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "BIOL 2401",
      "courseName": "Anatomy & Physiology I",
      "campus": "Brownsville",
      "tutorName": "Ximena Navarro",
      "days": {
          "Monday": "11:45AM - 12:45PM",
          "Tuesday": "11:45AM - 12:45PM",
          "Wednesday": "9:00AM - 11:30AM & 12:00PM - 3:15PM",
          "Thursday": "12:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "BIOL 2401",
      "courseName": "Anatomy & Physiology I",
      "campus": "Brownsville",
      "tutorName": "Kassandra Melendez",
      "days": {
          "Monday": "9:00AM - 2:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BIOL 2401",
      "courseName": "Anatomy & Physiology I",
      "campus": "Brownsville",
      "tutorName": "Sofia Munoz",
      "days": {
          "Monday": "9:30AM - 10:30AM & 2:30PM - 4:30PM",
          "Tuesday": "11:00AM - 1:00PM",
          "Wednesday": "9:30AM - 10:30AM & 6:30PM - 8:00PM",
          "Thursday": "11:00AM - 1:30PM",
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
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "10:30AM - 2:00PM",
          "Wednesday": "9:00AM - 11:30AM",
          "Thursday": "9:00AM - 12:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "BIOL 2402",
      "courseName": "Anatomy & Physiology II",
      "campus": "Brownsville",
      "tutorName": "Ximena Navarro",
      "days": {
          "Monday": "11:45AM - 12:45PM",
          "Tuesday": "11:45AM - 12:45PM",
          "Wednesday": "9:00AM - 11:30AM & 12:00PM - 3:15PM",
          "Thursday": "12:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- BIOL 3401 ----
  {
      "courseCode": "BIOL 3401",
      "courseName": "General Microbiology",
      "campus": "Brownsville",
      "tutorName": "Sofia Munoz",
      "days": {
          "Monday": "9:30AM - 10:30AM & 2:30PM - 4:30PM",
          "Tuesday": "11:00AM - 1:00PM",
          "Wednesday": "9:30AM - 10:30AM & 6:30PM - 8:00PM",
          "Thursday": "11:00AM - 1:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- BMED 1301 ----
  {
      "courseCode": "BMED 1301",
      "courseName": "Intro to Biomedical Sciences I",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- BMED 1302 ----
  {
      "courseCode": "BMED 1302",
      "courseName": "Intro to Biomedical Sciences II",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- BMED 2301 ----
  {
      "courseCode": "BMED 2301",
      "courseName": "Integrated Body Systems I",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- BMED 2302 ----
  {
      "courseCode": "BMED 2302",
      "courseName": "Integrated Body Systems II",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 1109 ----
  {
      "courseCode": "CHEM 1109",
      "courseName": "Chemistry for Engineers Lab",
      "campus": "Brownsville",
      "tutorName": "Samuel Jarquin",
      "days": {
          "Monday": "9:00AM - 1:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 1:30AM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "CHEM 1109",
      "courseName": "Chemistry for Engineers Lab",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CHEM 1111 ----
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Brownsville",
      "tutorName": "Kevin Torres-Vega",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "10:30AM - 2:00PM",
          "Wednesday": "9:00AM - 11:30AM",
          "Thursday": "9:00AM - 12:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 1112 ----
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 1309 ----
  {
      "courseCode": "CHEM 1309",
      "courseName": "Chemistry for Engineers",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "CHEM 1309",
      "courseName": "Chemistry for Engineers",
      "campus": "Brownsville",
      "tutorName": "Samuel Jarquin",
      "days": {
          "Monday": "9:00AM - 1:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 1:30AM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CHEM 1311 ----
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Brownsville",
      "tutorName": "Joel Almaguer",
      "days": {
          "Monday": "1:00PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "5:00PM - 7:45PM",
          "Thursday": "2:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Brownsville",
      "tutorName": "Kevin Torres-Vega",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "10:30AM - 2:00PM",
          "Wednesday": "9:00AM - 11:30AM",
          "Thursday": "9:00AM - 12:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Brownsville",
      "tutorName": "Ximena Navarro",
      "days": {
          "Monday": "11:45AM - 12:45PM",
          "Tuesday": "11:45AM - 12:45PM",
          "Wednesday": "9:00AM - 11:30AM & 12:00PM - 3:15PM",
          "Thursday": "12:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Brownsville",
      "tutorName": "Sofia Munoz",
      "days": {
          "Monday": "9:30AM - 10:30AM & 2:30PM - 4:30PM",
          "Tuesday": "11:00AM - 1:00PM",
          "Wednesday": "9:30AM - 10:30AM & 6:30PM - 8:00PM",
          "Thursday": "11:00AM - 1:30PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 1312 ----
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 2123 ----
  {
      "courseCode": "CHEM 2123",
      "courseName": "Organic Chemistry I Lab",
      "campus": "Brownsville",
      "tutorName": "Kassandra Melendez",
      "days": {
          "Monday": "9:00AM - 2:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2123",
      "courseName": "Organic Chemistry I Lab",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 2125 ----
  {
      "courseCode": "CHEM 2125",
      "courseName": "Organic Chemistry II Lab",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
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
          "Monday": "1:00PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "5:00PM - 7:45PM",
          "Thursday": "2:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Brownsville",
      "tutorName": "Kassandra Melendez",
      "days": {
          "Monday": "9:00AM - 2:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00PM - 5:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- CLSC 2429 ----
  {
      "courseCode": "CLSC 2429",
      "courseName": "Clinical Micro in Health Care",
      "campus": "Brownsville",
      "tutorName": "Ximena Navarro",
      "days": {
          "Monday": "11:45AM - 12:45PM",
          "Tuesday": "11:45AM - 12:45PM",
          "Wednesday": "9:00AM - 11:30AM & 12:00PM - 3:15PM",
          "Thursday": "12:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 1101 ----
  {
      "courseCode": "CSCI 1101",
      "courseName": "Intro to Computer Science",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 1470 ----
  {
      "courseCode": "CSCI 1470",
      "courseName": "Computer Science I",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 2333 ----
  {
      "courseCode": "CSCI 2333",
      "courseName": "Computer Org & Assembly Lang",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 2380 ----
  {
      "courseCode": "CSCI 2380",
      "courseName": "Computer Science II",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 3310 ----
  {
      "courseCode": "CSCI 3310",
      "courseName": "Mathematical Foundation on CS",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 3326 ----
  {
      "courseCode": "CSCI 3326",
      "courseName": "Obj Orientated Prog in JAVA",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 3333 ----
  {
      "courseCode": "CSCI 3333",
      "courseName": "Algorithms & Data Structures",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 4325 ----
  {
      "courseCode": "CSCI 4325",
      "courseName": "Automata, Formal Languages, and Comp",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 4333 ----
  {
      "courseCode": "CSCI 4333",
      "courseName": "Database Design & Implement",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- CSCI 4334 ----
  {
      "courseCode": "CSCI 4334",
      "courseName": "Operating Systems",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 4345 ----
  {
      "courseCode": "CSCI 4345",
      "courseName": "Computer Network",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- ECON 2301 ----
  {
      "courseCode": "ECON 2301",
      "courseName": "Principles of Macroeconomics",
      "campus": "Brownsville",
      "tutorName": "Jesus Munoz",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:45AM - 12:30PM",
          "Wednesday": "4:00PM - 8:00PM",
          "Thursday": "9:45AM - 12:45PM",
          "Friday": "9:45AM - 12:00PM"
      }
  },

  // ---- ECON 2302 ----
  {
      "courseCode": "ECON 2302",
      "courseName": "Principles of Microeconomics",
      "campus": "Brownsville",
      "tutorName": "Jesus Munoz",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:45AM - 12:30PM",
          "Wednesday": "4:00PM - 8:00PM",
          "Thursday": "9:45AM - 12:45PM",
          "Friday": "9:45AM - 12:00PM"
      }
  },

  // ---- EECE 1101 ----
  {
      "courseCode": "EECE 1101",
      "courseName": "Intro to Elec & Comp Engineering",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- EECE 2106 ----
  {
      "courseCode": "EECE 2106",
      "courseName": "Digital Systems I Lab",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "EECE 2106",
      "courseName": "Digital Systems I Lab",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- EECE 2305 ----
  {
      "courseCode": "EECE 2305",
      "courseName": "Electric Circuits I",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "EECE 2305",
      "courseName": "Electric Circuits I",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "EECE 2305",
      "courseName": "Electric Circuits I",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- EECE 2306 ----
  {
      "courseCode": "EECE 2306",
      "courseName": "Digital Systems I",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "EECE 2306",
      "courseName": "Digital Systems I",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "EECE 2306",
      "courseName": "Digital Systems I",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- EECE 2319 ----
  {
      "courseCode": "EECE 2319",
      "courseName": "Num Comp & Data Visual",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- EECE 25105 ----
  {
      "courseCode": "EECE 25105",
      "courseName": "Electric Circuits 1 Lab",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- EECE 3301 ----
  {
      "courseCode": "EECE 3301",
      "courseName": "Electronics",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- EECE 3315 ----
  {
      "courseCode": "EECE 3315",
      "courseName": "Electromagntics Engineering",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- EECE 3321 ----
  {
      "courseCode": "EECE 3321",
      "courseName": "Signals & Systems",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "EECE 3321",
      "courseName": "Signals & Systems",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- EECE 3340 ----
  {
      "courseCode": "EECE 3340",
      "courseName": "Probability & Stats for Engineers",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- EECE 3435 ----
  {
      "courseCode": "EECE 3435",
      "courseName": "Microprocessor Systems",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- FINA 3380 ----
  {
      "courseCode": "FINA 3380",
      "courseName": "Intro to Finance",
      "campus": "Brownsville",
      "tutorName": "Jesus Munoz",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:45AM - 12:30PM",
          "Wednesday": "4:00PM - 8:00PM",
          "Thursday": "9:45AM - 12:45PM",
          "Friday": "9:45AM - 12:00PM"
      }
  },

  // ---- HESI Prep ----
  {
      "courseCode": "HESI Prep",
      "courseName": "Anatomy & Physiology",
      "campus": "Brownsville",
      "tutorName": "Camila Hinojosa",
      "days": {
          "Monday": "12:30PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 2:30PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Critical Thinking",
      "campus": "Brownsville",
      "tutorName": "Camila Hinojosa",
      "days": {
          "Monday": "12:30PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 2:30PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Mathematics",
      "campus": "Brownsville",
      "tutorName": "Camila Hinojosa",
      "days": {
          "Monday": "12:30PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 2:30PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Reading Comprehension",
      "campus": "Brownsville",
      "tutorName": "Camila Hinojosa",
      "days": {
          "Monday": "12:30PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 2:30PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Vocabulary",
      "campus": "Brownsville",
      "tutorName": "Camila Hinojosa",
      "days": {
          "Monday": "12:30PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 2:30PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Anatomy & Physiology",
      "campus": "Brownsville",
      "tutorName": "Ximena Navarro",
      "days": {
          "Monday": "11:45AM - 12:45PM",
          "Tuesday": "11:45AM - 12:45PM",
          "Wednesday": "9:00AM - 11:30AM & 12:00PM - 3:15PM",
          "Thursday": "12:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Mathematics",
      "campus": "Brownsville",
      "tutorName": "Ximena Navarro",
      "days": {
          "Monday": "11:45AM - 12:45PM",
          "Tuesday": "11:45AM - 12:45PM",
          "Wednesday": "9:00AM - 11:30AM & 12:00PM - 3:15PM",
          "Thursday": "12:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Anatomy & Physiology",
      "campus": "Brownsville",
      "tutorName": "Ashlyn Ramirez",
      "days": {
          "Monday": "11:30AM - 5:00PM",
          "Tuesday": "12:15PM - 5:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Critical Thinking",
      "campus": "Brownsville",
      "tutorName": "Ashlyn Ramirez",
      "days": {
          "Monday": "11:30AM - 5:00PM",
          "Tuesday": "12:15PM - 5:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Grammar",
      "campus": "Brownsville",
      "tutorName": "Ashlyn Ramirez",
      "days": {
          "Monday": "11:30AM - 5:00PM",
          "Tuesday": "12:15PM - 5:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Mathematics",
      "campus": "Brownsville",
      "tutorName": "Ashlyn Ramirez",
      "days": {
          "Monday": "11:30AM - 5:00PM",
          "Tuesday": "12:15PM - 5:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Reading Comprehension",
      "campus": "Brownsville",
      "tutorName": "Ashlyn Ramirez",
      "days": {
          "Monday": "11:30AM - 5:00PM",
          "Tuesday": "12:15PM - 5:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Vocabulary",
      "campus": "Brownsville",
      "tutorName": "Ashlyn Ramirez",
      "days": {
          "Monday": "11:30AM - 5:00PM",
          "Tuesday": "12:15PM - 5:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- INFS 2300 ----
  {
      "courseCode": "INFS 2300",
      "courseName": "Data Modeling Management Tools",
      "campus": "Brownsville",
      "tutorName": "Jesus Munoz",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:45AM - 12:30PM",
          "Wednesday": "4:00PM - 8:00PM",
          "Thursday": "9:45AM - 12:45PM",
          "Friday": "9:45AM - 12:00PM"
      }
  },

  // ---- MARK 3300 ----
  {
      "courseCode": "MARK 3300",
      "courseName": "Principles of Marketing",
      "campus": "Brownsville",
      "tutorName": "Jesus Munoz",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:45AM - 12:30PM",
          "Wednesday": "4:00PM - 8:00PM",
          "Thursday": "9:45AM - 12:45PM",
          "Friday": "9:45AM - 12:00PM"
      }
  },

  // ---- MATH 1314;1414 ----
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Alejandra Ramos Arevalo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "4:15PM - 5:15PM",
          "Wednesday": "6:30PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Angel Morales",
      "days": {
          "Monday": "10:00AM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM & 1:00PM - 5:00PM",
          "Wednesday": "10:00AM - 2:30PM & 5:00PM - 6:15PM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Kevin Torres-Vega",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "10:30AM - 2:00PM",
          "Wednesday": "9:00AM - 11:30AM",
          "Thursday": "9:00AM - 12:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Paulina Olvera Leal",
      "days": {
          "Monday": "9:00AM - 12:15PM & 2:30PM - 4:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "9:00AM - 12:15PM & 2:30PM - 4:30PM",
          "Thursday": "9:00AM - 10:45AM",
          "Friday": "9:00AM - 10:00AM"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Samuel Jarquin",
      "days": {
          "Monday": "9:00AM - 1:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 1:30AM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Ulises Jarquin",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 2:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 2:00PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Sofia Munoz",
      "days": {
          "Monday": "9:30AM - 10:30AM & 2:30PM - 4:30PM",
          "Tuesday": "11:00AM - 1:00PM",
          "Wednesday": "9:30AM - 10:30AM & 6:30PM - 8:00PM",
          "Thursday": "11:00AM - 1:30PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MATH 1324 ----
  {
      "courseCode": "MATH 1324",
      "courseName": "Math for Business",
      "campus": "Brownsville",
      "tutorName": "Jesus Munoz",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:45AM - 12:30PM",
          "Wednesday": "4:00PM - 8:00PM",
          "Thursday": "9:45AM - 12:45PM",
          "Friday": "9:45AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 1324",
      "courseName": "Math for Business",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
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
          "Monday": "1:00PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "5:00PM - 7:45PM",
          "Thursday": "2:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 1342",
      "courseName": "Elementary Statistical Methods",
      "campus": "Brownsville",
      "tutorName": "Ashlyn Ramirez",
      "days": {
          "Monday": "11:30AM - 5:00PM",
          "Tuesday": "12:15PM - 5:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 1342",
      "courseName": "Elementary Statistical Methods",
      "campus": "Brownsville",
      "tutorName": "Abigail Montelongo",
      "days": {
          "Monday": "12:15PM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1342",
      "courseName": "Elementary Statistical Methods",
      "campus": "Brownsville",
      "tutorName": "Fernando Casanova",
      "days": {
          "Monday": "2:00PM - 5:00PM",
          "Tuesday": "9:30AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "9:30AM - 10:45AM",
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
          "Monday": "1:00PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "5:00PM - 7:45PM",
          "Thursday": "2:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- MATH 2318 ----
  {
      "courseCode": "MATH 2318",
      "courseName": "Linear Algebra",
      "campus": "Brownsville",
      "tutorName": "Alejandra Ramos Arevalo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "4:15PM - 5:15PM",
          "Wednesday": "6:30PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MATH 2346 ----
  {
      "courseCode": "MATH 2346",
      "courseName": "Math for EE & CE",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 2346",
      "courseName": "Math for EE & CE",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- MATH 2412 ----
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Brownsville",
      "tutorName": "Alejandra Ramos Arevalo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "4:15PM - 5:15PM",
          "Wednesday": "6:30PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Brownsville",
      "tutorName": "Angel Morales",
      "days": {
          "Monday": "10:00AM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM & 1:00PM - 5:00PM",
          "Wednesday": "10:00AM - 2:30PM & 5:00PM - 6:15PM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Brownsville",
      "tutorName": "Samuel Jarquin",
      "days": {
          "Monday": "9:00AM - 1:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 1:30AM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Brownsville",
      "tutorName": "Ulises Jarquin",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 2:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 2:00PM",
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
          "Monday": "CLOSED",
          "Tuesday": "4:15PM - 5:15PM",
          "Wednesday": "6:30PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Brownsville",
      "tutorName": "Angel Morales",
      "days": {
          "Monday": "10:00AM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM & 1:00PM - 5:00PM",
          "Wednesday": "10:00AM - 2:30PM & 5:00PM - 6:15PM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Brownsville",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Brownsville",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00AM - 12:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00AM - 12:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- MATH 2414 ----
  {
      "courseCode": "MATH 2414",
      "courseName": "Calculus II",
      "campus": "Brownsville",
      "tutorName": "Alejandra Ramos Arevalo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "4:15PM - 5:15PM",
          "Wednesday": "6:30PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2414",
      "courseName": "Calculus II",
      "campus": "Brownsville",
      "tutorName": "Angel Morales",
      "days": {
          "Monday": "10:00AM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM & 1:00PM - 5:00PM",
          "Wednesday": "10:00AM - 2:30PM & 5:00PM - 6:15PM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 2414",
      "courseName": "Calculus II",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- MATH 2415 ----
  {
      "courseCode": "MATH 2415",
      "courseName": "Calculus III",
      "campus": "Brownsville",
      "tutorName": "Alejandra Ramos Arevalo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "4:15PM - 5:15PM",
          "Wednesday": "6:30PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2415",
      "courseName": "Calculus III",
      "campus": "Brownsville",
      "tutorName": "Angel Morales",
      "days": {
          "Monday": "10:00AM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM & 1:00PM - 5:00PM",
          "Wednesday": "10:00AM - 2:30PM & 5:00PM - 6:15PM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- MATH 3341 ----
  {
      "courseCode": "MATH 3341",
      "courseName": "Differential Equations",
      "campus": "Brownsville",
      "tutorName": "Alejandra Ramos Arevalo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "4:15PM - 5:15PM",
          "Wednesday": "6:30PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 3341",
      "courseName": "Differential Equations",
      "campus": "Brownsville",
      "tutorName": "Angel Morales",
      "days": {
          "Monday": "10:00AM - 2:30PM",
          "Tuesday": "9:00AM - 10:45AM & 1:00PM - 5:00PM",
          "Wednesday": "10:00AM - 2:30PM & 5:00PM - 6:15PM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MATH 3341",
      "courseName": "Differential Equations",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- MECE 1101 ----
  {
      "courseCode": "MECE 1101",
      "courseName": "Intro to Mechanical Engineering",
      "campus": "Brownsville",
      "tutorName": "Samuel Jarquin",
      "days": {
          "Monday": "9:00AM - 1:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 1:30AM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- MECE 1221 ----
  {
      "courseCode": "MECE 1221",
      "courseName": "Engineering Graphics",
      "campus": "Brownsville",
      "tutorName": "Samuel Jarquin",
      "days": {
          "Monday": "9:00AM - 1:30AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 1:30AM",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "MECE 1221",
      "courseName": "Engineering Graphics",
      "campus": "Brownsville",
      "tutorName": "Jorge Camacho",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "12:00PM - 3:00PM",
          "Wednesday": "12:45PM - 3:45PM",
          "Thursday": "12:00PM - 3:00PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 3335 ----
  {
      "courseCode": "MECE 3335",
      "courseName": "Thermodynamics I",
      "campus": "Brownsville",
      "tutorName": "Jorge Camacho",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "12:00PM - 3:00PM",
          "Wednesday": "12:45PM - 3:45PM",
          "Thursday": "12:00PM - 3:00PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 3440 ----
  {
      "courseCode": "MECE 3440",
      "courseName": "Mechanical Engineering Anaylsis I",
      "campus": "Brownsville",
      "tutorName": "Jorge Camacho",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "12:00PM - 3:00PM",
          "Wednesday": "12:45PM - 3:45PM",
          "Thursday": "12:00PM - 3:00PM",
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
          "Monday": "CLOSED",
          "Tuesday": "9:45AM - 12:30PM",
          "Wednesday": "4:00PM - 8:00PM",
          "Thursday": "9:45AM - 12:45PM",
          "Friday": "9:45AM - 12:00PM"
      }
  },

  // ---- MUSI 1116 ----
  {
      "courseCode": "MUSI 1116",
      "courseName": "SS &ET I",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- MUSI 1117 ----
  {
      "courseCode": "MUSI 1117",
      "courseName": "SS &ET II",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- MUSI 1211 ----
  {
      "courseCode": "MUSI 1211",
      "courseName": "Music Theory I",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- MUSI 1212 ----
  {
      "courseCode": "MUSI 1212",
      "courseName": "Music Theory II",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- MUSI 1301 ----
  {
      "courseCode": "MUSI 1301",
      "courseName": "Fundamentals of Music",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- MUSI 2116 ----
  {
      "courseCode": "MUSI 2116",
      "courseName": "SS &ET III",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- MUSI 2117 ----
  {
      "courseCode": "MUSI 2117",
      "courseName": "SS &ET IV",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- MUSI 2211 ----
  {
      "courseCode": "MUSI 2211",
      "courseName": "Music Theory III",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- MUSI 2212 ----
  {
      "courseCode": "MUSI 2212",
      "courseName": "Music Theory IV",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- MUSI 3211 ----
  {
      "courseCode": "MUSI 3211",
      "courseName": "Form and Analysis",
      "campus": "Brownsville",
      "tutorName": "Ivan Melendez",
      "days": {
          "Monday": "1:00PM - 4:30PM",
          "Tuesday": "CLOSED",
          "Wednesday": "1:00PM - 5:30PM",
          "Thursday": "3:30PM - 4:30PM",
          "Friday": "9:00AM -12:00PM"
      }
  },

  // ---- NURSING ----
  {
      "courseCode": "NURSING",
      "courseName": "1st Semester Nursing",
      "campus": "Brownsville",
      "tutorName": "Camila Hinojosa",
      "days": {
          "Monday": "12:30PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 2:30PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "NURSING",
      "courseName": "2nd Semester Nursing",
      "campus": "Brownsville",
      "tutorName": "Camila Hinojosa",
      "days": {
          "Monday": "12:30PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 2:30PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "NURSING",
      "courseName": "3rd Semester Nursing",
      "campus": "Brownsville",
      "tutorName": "Camila Hinojosa",
      "days": {
          "Monday": "12:30PM - 5:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00AM - 2:30PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "NURSING",
      "courseName": "1st Semester Nursing",
      "campus": "Brownsville",
      "tutorName": "Ashlyn Ramirez",
      "days": {
          "Monday": "11:30AM - 5:00PM",
          "Tuesday": "12:15PM - 5:00PM",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- NUTR 2351 ----
  {
      "courseCode": "NUTR 2351",
      "courseName": "Intro to Clinical Nutrition",
      "campus": "Brownsville",
      "tutorName": "Ximena Navarro",
      "days": {
          "Monday": "11:45AM - 12:45PM",
          "Tuesday": "11:45AM - 12:45PM",
          "Wednesday": "9:00AM - 11:30AM & 12:00PM - 3:15PM",
          "Thursday": "12:45PM - 5:00PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- PHYS 1401 ----
  {
      "courseCode": "PHYS 1401",
      "courseName": "General Physics I",
      "campus": "Brownsville",
      "tutorName": "Kevin Torres-Vega",
      "days": {
          "Monday": "9:00AM - 11:30AM",
          "Tuesday": "10:30AM - 2:00PM",
          "Wednesday": "9:00AM - 11:30AM",
          "Thursday": "9:00AM - 12:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- PHYS 2425 ----
  {
      "courseCode": "PHYS 2425",
      "courseName": "Physics for Sci & Engr I",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },
  {
      "courseCode": "PHYS 2425",
      "courseName": "Physics for Sci & Engr I",
      "campus": "Brownsville",
      "tutorName": "Daniel Aguirre",
      "days": {
          "Monday": "9:00AM - 10:30AM",
          "Tuesday": "1:00PM - 1:45PM",
          "Wednesday": "9:30AM - 10:30AM",
          "Thursday": "1:00PM - 1:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- PHYS 2426 ----
  {
      "courseCode": "PHYS 2426",
      "courseName": "Physics for Sci & Engr II",
      "campus": "Brownsville",
      "tutorName": "Kenneth Davis",
      "days": {
          "Monday": "10:30AM - 3:30PM",
          "Tuesday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Wednesday": "10:30AM - 3:30PM",
          "Thursday": "10:00AM - 12:00PM & 2:30PM - 3:30PM",
          "Friday": "9:00AM - 12:00PM"
      }
  },

  // ---- QUMT 2341 ----
  {
      "courseCode": "QUMT 2341",
      "courseName": "Business Stats I",
      "campus": "Brownsville",
      "tutorName": "Fernando Casanova",
      "days": {
          "Monday": "2:00PM - 5:00PM",
          "Tuesday": "9:30AM - 10:45AM",
          "Wednesday": "CLOSED",
          "Thursday": "9:30AM - 10:45AM",
          "Friday": "CLOSED"
      }
  },

  // ---- SPAN 3313 ----
  {
      "courseCode": "SPAN 3313",
      "courseName": "Adv Grammar & Comp Heritage I",
      "campus": "Brownsville",
      "tutorName": "Paulina Olvera Leal",
      "days": {
          "Monday": "9:00AM - 12:15PM & 2:30PM - 4:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "9:00AM - 12:15PM & 2:30PM - 4:30PM",
          "Thursday": "9:00AM - 10:45AM",
          "Friday": "9:00AM - 10:00AM"
      }
  },

  // ---- SPAN 3315 ----
  {
      "courseCode": "SPAN 3315",
      "courseName": "Adv Grammar & Comp Heritage II",
      "campus": "Brownsville",
      "tutorName": "Paulina Olvera Leal",
      "days": {
          "Monday": "9:00AM - 12:15PM & 2:30PM - 4:30PM",
          "Tuesday": "9:00AM - 10:45AM",
          "Wednesday": "9:00AM - 12:15PM & 2:30PM - 4:30PM",
          "Thursday": "9:00AM - 10:45AM",
          "Friday": "9:00AM - 10:00AM"
      }
  },

  // ---- STAT 3337 ----
  {
      "courseCode": "STAT 3337",
      "courseName": "Probability & Statistics",
      "campus": "Brownsville",
      "tutorName": "Alejandra Ramos Arevalo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "4:15PM - 5:15PM",
          "Wednesday": "6:30PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ============================================================
  // EDINBURG CAMPUS
  // ============================================================

  // ---- ACCT 2301 ----
  {
      "courseCode": "ACCT 2301",
      "courseName": "Intro to Financial Accounting",
      "campus": "Edinburg",
      "tutorName": "Alexis Aguilar",
      "days": {
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ACCT 2301",
      "courseName": "Intro to Financial Accounting",
      "campus": "Edinburg",
      "tutorName": "Fernando Casanova",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "02:00 PM - 05:00 PM",
          "Wednesday": "03:30 PM - 08:00 PM",
          "Thursday": "02:00 PM - 05:00 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ACCT 2302 ----
  {
      "courseCode": "ACCT 2302",
      "courseName": "Intro to Managerial Accounting",
      "campus": "Edinburg",
      "tutorName": "Alexis Aguilar",
      "days": {
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ACCT 2302",
      "courseName": "Intro to Managerial Accounting",
      "campus": "Edinburg",
      "tutorName": "Fernando Casanova",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "02:00 PM - 05:00 PM",
          "Wednesday": "03:30 PM - 08:00 PM",
          "Thursday": "02:00 PM - 05:00 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 1310 ----
  {
      "courseCode": "ASLI 1310",
      "courseName": "ASLI I",
      "campus": "Edinburg",
      "tutorName": "Gabrielle Black",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 03:00 PM",
          "Wednesday": "09:00 AM - 03:00 PM",
          "Thursday": "09:00 AM - 12:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 1310",
      "courseName": "ASLI I",
      "campus": "Edinburg",
      "tutorName": "Greyz Gonzalez",
      "days": {
          "Monday": "09:00 AM - 02:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "09:00 AM - 02:30 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "ASLI 1310",
      "courseName": "ASLI I",
      "campus": "Edinburg",
      "tutorName": "Josue Peralta de Jesus",
      "days": {
          "Monday": "11:00 AM - 12:00 PM & 3:30 PM - 4:45 PM",
          "Tuesday": "9:15 AM - 12:15 PM & 1:30 PM - 3:15 PM",
          "Wednesday": "11:00 AM - 12:00 PM & 3:30 PM - 4:45 PM & 6:30 PM - 7:30 PM",
          "Thursday": "9:15 AM - 12:15 PM & 1:30 PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 1310",
      "courseName": "ASLI I",
      "campus": "Edinburg",
      "tutorName": "Mario Salinas",
      "days": {
          "Monday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Tuesday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Wednesday": "2:45 PM - 5:00 PM",
          "Thursday": "9:00 AM - 1:45 PM & 2:45 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 1320 ----
  {
      "courseCode": "ASLI 1320",
      "courseName": "ASLI II",
      "campus": "Edinburg",
      "tutorName": "Gabrielle Black",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 03:00 PM",
          "Wednesday": "09:00 AM - 03:00 PM",
          "Thursday": "09:00 AM - 12:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 1320",
      "courseName": "ASLI II",
      "campus": "Edinburg",
      "tutorName": "Greyz Gonzalez",
      "days": {
          "Monday": "09:00 AM - 02:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "09:00 AM - 02:30 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "ASLI 1320",
      "courseName": "ASLI II",
      "campus": "Edinburg",
      "tutorName": "Josue Peralta de Jesus",
      "days": {
          "Monday": "11:00 AM - 12:00 PM & 3:30 PM - 4:45 PM",
          "Tuesday": "9:15 AM - 12:15 PM & 1:30 PM - 3:15 PM",
          "Wednesday": "11:00 AM - 12:00 PM & 3:30 PM - 4:45 PM & 6:30 PM - 7:30 PM",
          "Thursday": "9:15 AM - 12:15 PM & 1:30 PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 1320",
      "courseName": "ASLI II",
      "campus": "Edinburg",
      "tutorName": "Mario Salinas",
      "days": {
          "Monday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Tuesday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Wednesday": "2:45 PM - 5:00 PM",
          "Thursday": "9:00 AM - 1:45 PM & 2:45 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 2310 ----
  {
      "courseCode": "ASLI 2310",
      "courseName": "ASLI III",
      "campus": "Edinburg",
      "tutorName": "Gabrielle Black",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 03:00 PM",
          "Wednesday": "09:00 AM - 03:00 PM",
          "Thursday": "09:00 AM - 12:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 2310",
      "courseName": "ASLI III",
      "campus": "Edinburg",
      "tutorName": "Greyz Gonzalez",
      "days": {
          "Monday": "09:00 AM - 02:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "09:00 AM - 02:30 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "ASLI 2310",
      "courseName": "ASLI III",
      "campus": "Edinburg",
      "tutorName": "Josue Peralta de Jesus",
      "days": {
          "Monday": "11:00 AM - 12:00 PM & 3:30 PM - 4:45 PM",
          "Tuesday": "9:15 AM - 12:15 PM & 1:30 PM - 3:15 PM",
          "Wednesday": "11:00 AM - 12:00 PM & 3:30 PM - 4:45 PM & 6:30 PM - 7:30 PM",
          "Thursday": "9:15 AM - 12:15 PM & 1:30 PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 2310",
      "courseName": "ASLI III",
      "campus": "Edinburg",
      "tutorName": "Mario Salinas",
      "days": {
          "Monday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Tuesday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Wednesday": "2:45 PM - 5:00 PM",
          "Thursday": "9:00 AM - 1:45 PM & 2:45 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 3310 ----
  {
      "courseCode": "ASLI 3310",
      "courseName": "ASLI IV",
      "campus": "Edinburg",
      "tutorName": "Gabrielle Black",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 03:00 PM",
          "Wednesday": "09:00 AM - 03:00 PM",
          "Thursday": "09:00 AM - 12:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 3310",
      "courseName": "ASLI IV",
      "campus": "Edinburg",
      "tutorName": "Greyz Gonzalez",
      "days": {
          "Monday": "09:00 AM - 02:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "09:00 AM - 02:30 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "ASLI 3310",
      "courseName": "ASLI IV",
      "campus": "Edinburg",
      "tutorName": "Josue Peralta de Jesus",
      "days": {
          "Monday": "11:00 AM - 12:00 PM & 3:30 PM - 4:45 PM",
          "Tuesday": "9:15 AM - 12:15 PM & 1:30 PM - 3:15 PM",
          "Wednesday": "11:00 AM - 12:00 PM & 3:30 PM - 4:45 PM & 6:30 PM - 7:30 PM",
          "Thursday": "9:15 AM - 12:15 PM & 1:30 PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 3310",
      "courseName": "ASLI IV",
      "campus": "Edinburg",
      "tutorName": "Mario Salinas",
      "days": {
          "Monday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Tuesday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Wednesday": "2:45 PM - 5:00 PM",
          "Thursday": "9:00 AM - 1:45 PM & 2:45 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 3320 ----
  {
      "courseCode": "ASLI 3320",
      "courseName": "ASLI V",
      "campus": "Edinburg",
      "tutorName": "Gabrielle Black",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 03:00 PM",
          "Wednesday": "09:00 AM - 03:00 PM",
          "Thursday": "09:00 AM - 12:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 3320",
      "courseName": "ASLI V",
      "campus": "Edinburg",
      "tutorName": "Greyz Gonzalez",
      "days": {
          "Monday": "09:00 AM - 02:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "09:00 AM - 02:30 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "ASLI 3320",
      "courseName": "ASLI V",
      "campus": "Edinburg",
      "tutorName": "Mario Salinas",
      "days": {
          "Monday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Tuesday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Wednesday": "2:45 PM - 5:00 PM",
          "Thursday": "9:00 AM - 1:45 PM & 2:45 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 3324 ----
  {
      "courseCode": "ASLI 3324",
      "courseName": "ASL Fingerspelling & Numbers",
      "campus": "Edinburg",
      "tutorName": "Greyz Gonzalez",
      "days": {
          "Monday": "09:00 AM - 02:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "09:00 AM - 02:30 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "ASLI 3324",
      "courseName": "ASL Fingerspelling & Numbers",
      "campus": "Edinburg",
      "tutorName": "Mario Salinas",
      "days": {
          "Monday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Tuesday": "9:00 AM - 11:45 AM & 2:45 PM - 5:00 PM",
          "Wednesday": "2:45 PM - 5:00 PM",
          "Thursday": "9:00 AM - 1:45 PM & 2:45 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 3325 ----
  {
      "courseCode": "ASLI 3325",
      "courseName": "Intepreting I",
      "campus": "Edinburg",
      "tutorName": "Gabrielle Black",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 03:00 PM",
          "Wednesday": "09:00 AM - 03:00 PM",
          "Thursday": "09:00 AM - 12:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 3325",
      "courseName": "Intepreting I",
      "campus": "Edinburg",
      "tutorName": "Greyz Gonzalez",
      "days": {
          "Monday": "09:00 AM - 02:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "09:00 AM - 02:30 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },

  // ---- ASLI 3340 ----
  {
      "courseCode": "ASLI 3340",
      "courseName": "Intro to Classifiers",
      "campus": "Edinburg",
      "tutorName": "Gabrielle Black",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 03:00 PM",
          "Wednesday": "09:00 AM - 03:00 PM",
          "Thursday": "09:00 AM - 12:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 3340",
      "courseName": "Intro to Classifiers",
      "campus": "Edinburg",
      "tutorName": "Greyz Gonzalez",
      "days": {
          "Monday": "09:00 AM - 02:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "09:00 AM - 02:30 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "ASLI 3340",
      "courseName": "Intro to Classifiers",
      "campus": "Edinburg",
      "tutorName": "",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- ASLI 3345 ----
  {
      "courseCode": "ASLI 3345",
      "courseName": "Interpreting II",
      "campus": "Edinburg",
      "tutorName": "Gabrielle Black",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 03:00 PM",
          "Wednesday": "09:00 AM - 03:00 PM",
          "Thursday": "09:00 AM - 12:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "ASLI 3345",
      "courseName": "Interpreting II",
      "campus": "Edinburg",
      "tutorName": "Greyz Gonzalez",
      "days": {
          "Monday": "09:00 AM - 02:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "09:00 AM - 02:30 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },

  // ---- BIOL 1406 ----
  {
      "courseCode": "BIOL 1406",
      "courseName": "General Biology I",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "BIOL 1406",
      "courseName": "General Biology I",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BIOL 1406",
      "courseName": "General Biology I",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- BIOL 1407 ----
  {
      "courseCode": "BIOL 1407",
      "courseName": "General Biology II",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "BIOL 1407",
      "courseName": "General Biology II",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BIOL 1407",
      "courseName": "General Biology II",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- BIOL 2401 ----
  {
      "courseCode": "BIOL 2401",
      "courseName": "Anatomy & Physiology I",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "BIOL 2401",
      "courseName": "Anatomy & Physiology I",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BIOL 2401",
      "courseName": "Anatomy & Physiology I",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BIOL 2401",
      "courseName": "Anatomy & Physiology I",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- BIOL 2402 ----
  {
      "courseCode": "BIOL 2402",
      "courseName": "Anatomy & Physiology II",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "BIOL 2402",
      "courseName": "Anatomy & Physiology II",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BIOL 2402",
      "courseName": "Anatomy & Physiology II",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BIOL 2402",
      "courseName": "Anatomy & Physiology II",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- BIOL 3201 ----
  {
      "courseCode": "BIOL 3201",
      "courseName": "Ecology & Evolution Lab",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- BIOL 3215 ----
  {
      "courseCode": "BIOL 3215",
      "courseName": "Cell, Molucular Genetics Lab",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- BIOL 3301 ----
  {
      "courseCode": "BIOL 3301",
      "courseName": "Ecology & Evolution",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- BIOL 3313 ----
  {
      "courseCode": "BIOL 3313",
      "courseName": "Genetics",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BIOL 3313",
      "courseName": "Genetics",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- BIOL 3315 ----
  {
      "courseCode": "BIOL 3315",
      "courseName": "Cell & Molecular Biology",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- BIOL 3401 ----
  {
      "courseCode": "BIOL 3401",
      "courseName": "General Microbiology",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- BIOL 4302 ----
  {
      "courseCode": "BIOL 4302",
      "courseName": "Adv Biochemistry",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- BIOL 4340 ----
  {
      "courseCode": "BIOL 4340",
      "courseName": "Astrobiology",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- BLAW 3337 ----
  {
      "courseCode": "BLAW 3337",
      "courseName": "Business Law I",
      "campus": "Edinburg",
      "tutorName": "Alexis Aguilar",
      "days": {
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },

  // ---- BMED 1301 ----
  {
      "courseCode": "BMED 1301",
      "courseName": "Intro to Biomedical Sciences I",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 1301",
      "courseName": "Intro to Biomedical Sciences I",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 1301",
      "courseName": "Intro to Biomedical Sciences I",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 1301",
      "courseName": "Intro to Biomedical Sciences I",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 1301",
      "courseName": "Intro to Biomedical Sciences I",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 1302 ----
  {
      "courseCode": "BMED 1302",
      "courseName": "Intro to Biomedical Sciences II",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 1302",
      "courseName": "Intro to Biomedical Sciences II",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 1302",
      "courseName": "Intro to Biomedical Sciences II",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 1302",
      "courseName": "Intro to Biomedical Sciences II",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 1302",
      "courseName": "Intro to Biomedical Sciences II",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 2301 ----
  {
      "courseCode": "BMED 2301",
      "courseName": "Integrated Body Systems I",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "BMED 2301",
      "courseName": "Integrated Body Systems I",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 2301",
      "courseName": "Integrated Body Systems I",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 2301",
      "courseName": "Integrated Body Systems I",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 2301",
      "courseName": "Integrated Body Systems I",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 2302 ----
  {
      "courseCode": "BMED 2302",
      "courseName": "Integrated Body Systems II",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "BMED 2302",
      "courseName": "Integrated Body Systems II",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 2302",
      "courseName": "Integrated Body Systems II",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 2302",
      "courseName": "Integrated Body Systems II",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 2302",
      "courseName": "Integrated Body Systems II",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 3102 ----
  {
      "courseCode": "BMED 3102",
      "courseName": "Neurochem",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 4230 ----
  {
      "courseCode": "BMED 4230",
      "courseName": "Human Genetics/Med Genomics",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 4250 ----
  {
      "courseCode": "BMED 4250",
      "courseName": "Adv Cell Bio",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 4260 ----
  {
      "courseCode": "BMED 4260",
      "courseName": "Adv Molecular Bio",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 4280 ----
  {
      "courseCode": "BMED 4280",
      "courseName": "Adv Med Neurosci",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 4310 ----
  {
      "courseCode": "BMED 4310",
      "courseName": "Medical Biochemistry",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "BMED 4310",
      "courseName": "Medical Biochemistry",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- BMED 4440 ----
  {
      "courseCode": "BMED 4440",
      "courseName": "Medical Microbiology",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- CHEM 1109 ----
  {
      "courseCode": "CHEM 1109",
      "courseName": "Chemistry for Engineers Lab",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 1111 ----
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Miranda	Villasenor",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:30 AM - 2:00 PM & 2:30 PM - 5:00 PM",
          "Wednesday": "3:30 PM - 5:00 PM",
          "Thursday": "11:30 AM - 1:00 PM",
          "Friday": "10:00 AM - 12:00 AM"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1111",
      "courseName": "General Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- CHEM 1112 ----
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Miranda	Villasenor",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:30 AM - 2:00 PM & 2:30 PM - 5:00 PM",
          "Wednesday": "3:30 PM - 5:00 PM",
          "Thursday": "11:30 AM - 1:00 PM",
          "Friday": "10:00 AM - 12:00 AM"
      }
  },
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1112",
      "courseName": "General Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- CHEM 1311 ----
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Miranda	Villasenor",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:30 AM - 2:00 PM & 2:30 PM - 5:00 PM",
          "Wednesday": "3:30 PM - 5:00 PM",
          "Thursday": "11:30 AM - 1:00 PM",
          "Friday": "10:00 AM - 12:00 AM"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1311",
      "courseName": "General Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- CHEM 1312 ----
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Miranda	Villasenor",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:30 AM - 2:00 PM & 2:30 PM - 5:00 PM",
          "Wednesday": "3:30 PM - 5:00 PM",
          "Thursday": "11:30 AM - 1:00 PM",
          "Friday": "10:00 AM - 12:00 AM"
      }
  },
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 1312",
      "courseName": "General Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- CHEM 2101 ----
  {
      "courseCode": "CHEM 2101",
      "courseName": "Analytical Chemistry Lab",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 2123 ----
  {
      "courseCode": "CHEM 2123",
      "courseName": "Organic Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 2123",
      "courseName": "Organic Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2123",
      "courseName": "Organic Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2123",
      "courseName": "Organic Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2123",
      "courseName": "Organic Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2123",
      "courseName": "Organic Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 2123",
      "courseName": "Organic Chemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- CHEM 2125 ----
  {
      "courseCode": "CHEM 2125",
      "courseName": "Organic Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 2125",
      "courseName": "Organic Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2125",
      "courseName": "Organic Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2125",
      "courseName": "Organic Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2125",
      "courseName": "Organic Chemistry II Lab",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 2301 ----
  {
      "courseCode": "CHEM 2301",
      "courseName": "Analytical Chemistry",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 2323 ----
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Miranda	Villasenor",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:30 AM - 2:00 PM & 2:30 PM - 5:00 PM",
          "Wednesday": "3:30 PM - 5:00 PM",
          "Thursday": "11:30 AM - 1:00 PM",
          "Friday": "10:00 AM - 12:00 AM"
      }
  },
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 2323",
      "courseName": "Organic Chemistry I",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- CHEM 2325 ----
  {
      "courseCode": "CHEM 2325",
      "courseName": "Organic Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "CHEM 2325",
      "courseName": "Organic Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2325",
      "courseName": "Organic Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2325",
      "courseName": "Organic Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 2325",
      "courseName": "Organic Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Miranda	Villasenor",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:30 AM - 2:00 PM & 2:30 PM - 5:00 PM",
          "Wednesday": "3:30 PM - 5:00 PM",
          "Thursday": "11:30 AM - 1:00 PM",
          "Friday": "10:00 AM - 12:00 AM"
      }
  },
  {
      "courseCode": "CHEM 2325",
      "courseName": "Organic Chemistry II",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 3101 ----
  {
      "courseCode": "CHEM 3101",
      "courseName": "Inorganic Chemistry Lab",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 3103 ----
  {
      "courseCode": "CHEM 3103",
      "courseName": "Biochemistry I Lab",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 3301 ----
  {
      "courseCode": "CHEM 3301",
      "courseName": "Inorganic Chemistry",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 3303 ----
  {
      "courseCode": "CHEM 3303",
      "courseName": "Biochemistry I",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 3303",
      "courseName": "Biochemistry I",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 3303",
      "courseName": "Biochemistry I",
      "campus": "Edinburg",
      "tutorName": "Miranda	Villasenor",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:30 AM - 2:00 PM & 2:30 PM - 5:00 PM",
          "Wednesday": "3:30 PM - 5:00 PM",
          "Thursday": "11:30 AM - 1:00 PM",
          "Friday": "10:00 AM - 12:00 AM"
      }
  },
  {
      "courseCode": "CHEM 3303",
      "courseName": "Biochemistry I",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CHEM 3303",
      "courseName": "Biochemistry I",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- CHEM 3315 ----
  {
      "courseCode": "CHEM 3315",
      "courseName": "Cell and Molecular Biology",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
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
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- CHEM 4302 ----
  {
      "courseCode": "CHEM 4302",
      "courseName": "Advanced Biochemistry",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 4303 ----
  {
      "courseCode": "CHEM 4303",
      "courseName": "Adv Organic Chemistry",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CHEM 4320 ----
  {
      "courseCode": "CHEM 4320",
      "courseName": "Nutr. & Exercise Biochem.",
      "campus": "Edinburg",
      "tutorName": "Maximilliano Benavidez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "9:00 AM - 1:00 PM",
          "Wednesday": "CLOSED",
          "Thursday": "9:00 AM - 1:00 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CIVE 1101 ----
  {
      "courseCode": "CIVE 1101",
      "courseName": "Intro to Civil Engr",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CIVE 2220 ----
  {
      "courseCode": "CIVE 2220",
      "courseName": "Civil Engr Measurements",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CIVE 3315 ----
  {
      "courseCode": "CIVE 3315",
      "courseName": "Fluid Mechanics and Hydraulics",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CIVE 3321 ----
  {
      "courseCode": "CIVE 3321",
      "courseName": "Mechanics of Materials",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CIVE 3340 ----
  {
      "courseCode": "CIVE 3340",
      "courseName": "CE Materials",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CIVE 3342 ----
  {
      "courseCode": "CIVE 3342",
      "courseName": "Structural Analysis I",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CIVE 3475 ----
  {
      "courseCode": "CIVE 3475",
      "courseName": "Geotech Engr & Application",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CLSC 2429 ----
  {
      "courseCode": "CLSC 2429",
      "courseName": "Clinical Micro in Health Care",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },

  // ---- CSCI 1101 ----
  {
      "courseCode": "CSCI 1101",
      "courseName": "Intro to Computer Science",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CSCI 1101",
      "courseName": "Intro to Computer Science",
      "campus": "Edinburg",
      "tutorName": "Arturo Gonzalez",
      "days": {
          "Monday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Tuesday": "3:30 PM - 4:45 PM",
          "Wednesday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Thursday": "3:30 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 1470 ----
  {
      "courseCode": "CSCI 1470",
      "courseName": "Computer Science I",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CSCI 1470",
      "courseName": "Computer Science I",
      "campus": "Edinburg",
      "tutorName": "Arturo Gonzalez",
      "days": {
          "Monday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Tuesday": "3:30 PM - 4:45 PM",
          "Wednesday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Thursday": "3:30 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 2333 ----
  {
      "courseCode": "CSCI 2333",
      "courseName": "Computer Org & Assembly Lang",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 2380 ----
  {
      "courseCode": "CSCI 2380",
      "courseName": "Computer Science II",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "CSCI 2380",
      "courseName": "Computer Science II",
      "campus": "Edinburg",
      "tutorName": "Arturo Gonzalez",
      "days": {
          "Monday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Tuesday": "3:30 PM - 4:45 PM",
          "Wednesday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Thursday": "3:30 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 3310 ----
  {
      "courseCode": "CSCI 3310",
      "courseName": "Mathematical Foundation on CS",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 3326 ----
  {
      "courseCode": "CSCI 3326",
      "courseName": "Obj Orientated Prog in JAVA",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 3333 ----
  {
      "courseCode": "CSCI 3333",
      "courseName": "Algorithms & Data Structures",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 3336 ----
  {
      "courseCode": "CSCI 3336",
      "courseName": "Organization of Program Language",
      "campus": "Edinburg",
      "tutorName": "Arturo Gonzalez",
      "days": {
          "Monday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Tuesday": "3:30 PM - 4:45 PM",
          "Wednesday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Thursday": "3:30 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 4325 ----
  {
      "courseCode": "CSCI 4325",
      "courseName": "Automata, Formal Languages, and Comp",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 4333 ----
  {
      "courseCode": "CSCI 4333",
      "courseName": "Database Design & Implement",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },

  // ---- CSCI 4345 ----
  {
      "courseCode": "CSCI 4345",
      "courseName": "Computer Network",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
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
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
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
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },

  // ---- EECE 1101 ----
  {
      "courseCode": "EECE 1101",
      "courseName": "Intro to Elec & Comp Engineering",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- EECE 2106 ----
  {
      "courseCode": "EECE 2106",
      "courseName": "Digital Systems I Lab",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "EECE 2106",
      "courseName": "Digital Systems I Lab",
      "campus": "Edinburg",
      "tutorName": "Angelina Anthony",
      "days": {
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- EECE 2305 ----
  {
      "courseCode": "EECE 2305",
      "courseName": "Electric Circuits I",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "EECE 2305",
      "courseName": "Electric Circuits I",
      "campus": "Edinburg",
      "tutorName": "Angelina Anthony",
      "days": {
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- EECE 2306 ----
  {
      "courseCode": "EECE 2306",
      "courseName": "Digital Systems I",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "EECE 2306",
      "courseName": "Digital Systems I",
      "campus": "Edinburg",
      "tutorName": "Angelina Anthony",
      "days": {
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- EECE 2317 ----
  {
      "courseCode": "EECE 2317",
      "courseName": "Electrical & Electronic Systems",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- EECE 2319 ----
  {
      "courseCode": "EECE 2319",
      "courseName": "Num Comp & Data Visual",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- EECE 2340 ----
  {
      "courseCode": "EECE 2340",
      "courseName": "Engr Materials",
      "campus": "Edinburg",
      "tutorName": "Angelina Anthony",
      "days": {
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- EECE 3315 ----
  {
      "courseCode": "EECE 3315",
      "courseName": "Electromagntics Engineering",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- EECE 3340 ----
  {
      "courseCode": "EECE 3340",
      "courseName": "Probability & Stats for Engineers",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- FE Prep ----
  {
      "courseCode": "FE Prep",
      "courseName": "Mathematics & Statistics",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Ethics & Professional Practice",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Engineering Economics",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Statics",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Dynamics",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Mechanics of Materials",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Materials",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Fluid Mechanics",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Surveying",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Water Resouces & Environmental",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Structural Engineering",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Geotechnical Engineering",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "FE Prep",
      "courseName": "Construction Engineering",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- HESI Prep ----
  {
      "courseCode": "HESI Prep",
      "courseName": "Anatomy & Physiology",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Critical Thinking",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Grammar",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Mathematics",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Reading Comprehension",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Vocabulary",
      "campus": "Edinburg",
      "tutorName": "Amanda Villa",
      "days": {
          "Monday": "11:30 AM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "12:00 PM - 5:00 PM",
          "Thursday": "CLOSED",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Anatomy & Physiology",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Critical Thinking",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Grammar",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Mathematics",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Reading Comprehension",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "HESI Prep",
      "courseName": "Vocabulary",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MARK 3300 ----
  {
      "courseCode": "MARK 3300",
      "courseName": "Principles of Marketing",
      "campus": "Edinburg",
      "tutorName": "Alexis Aguilar",
      "days": {
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MATH 1314;1414 ----
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM -3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Edinburg",
      "tutorName": "Angelina Anthony",
      "days": {
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Edinburg",
      "tutorName": "Nolan Salinas",
      "days": {
          "Monday": "9:00 AM - 11:30 AM",
          "Tuesday": "CLOSED",
          "Wednesday": "9:00 AM - 1:30 PM",
          "Thursday": "1:15PM - 3:15 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1314;1414",
      "courseName": "College Algebra",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- MATH 1342 ----
  {
      "courseCode": "MATH 1342",
      "courseName": "Elementary Statistical Methods",
      "campus": "Edinburg",
      "tutorName": "Alexis Aguilar",
      "days": {
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1342",
      "courseName": "Elementary Statistical Methods",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "MATH 1342",
      "courseName": "Elementary Statistical Methods",
      "campus": "Edinburg",
      "tutorName": "Catalina Benavides",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "09:00 AM - 02:30 PM",
          "Wednesday": "01:15 PM - 05:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1342",
      "courseName": "Elementary Statistical Methods",
      "campus": "Edinburg",
      "tutorName": "Fernando Casanova",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "02:00 PM - 05:00 PM",
          "Wednesday": "03:30 PM - 08:00 PM",
          "Thursday": "02:00 PM - 05:00 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1342",
      "courseName": "Elementary Statistical Methods",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1342",
      "courseName": "Elementary Statistical Methods",
      "campus": "Edinburg",
      "tutorName": "Jorge Gonzalez",
      "days": {
          "Monday": "2:30 PM - 4:00 PM",
          "Tuesday": "1:00 PM - 4:00 PM",
          "Wednesday": "3:00 PM - 4:30 PM",
          "Thursday": "1:00 PM - 4:00 PM",
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
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MATH 1350 ----
  {
      "courseCode": "MATH 1350",
      "courseName": "Fundamentals of Math I",
      "campus": "Edinburg",
      "tutorName": "Alexis Aguilar",
      "days": {
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1350",
      "courseName": "Fundamentals of Math I",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- MATH 1351 ----
  {
      "courseCode": "MATH 1351",
      "courseName": "Fundamentals of Math II",
      "campus": "Edinburg",
      "tutorName": "Alexis Aguilar",
      "days": {
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 1351",
      "courseName": "Fundamentals of Math II",
      "campus": "Edinburg",
      "tutorName": "Srinidhi Sompalli",
      "days": {
          "Monday": "10:00 AM - 2:00 PM",
          "Tuesday": "11:15 AM - 1:15 PM",
          "Wednesday": "6:00 PM - 8:00PM",
          "Thursday": "11:15 AM - 1:15 PM",
          "Friday": "9:00 AM - 12:00PM"
      }
  },

  // ---- MATH 1414 ----
  {
      "courseCode": "MATH 1414",
      "courseName": "College Algebra",
      "campus": "Edinburg",
      "tutorName": "Arturo Gonzalez",
      "days": {
          "Monday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Tuesday": "3:30 PM - 4:45 PM",
          "Wednesday": "9:30 AM - 10:30 AM & 2:00 PM - 4:45 PM",
          "Thursday": "3:30 PM - 4:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MATH 2346 ----
  {
      "courseCode": "MATH 2346",
      "courseName": "Math for EE & CE",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MATH 2412 ----
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "PreCalculus",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2412",
      "courseName": "Precalculus",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- MATH 2413 ----
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Edinburg",
      "tutorName": "Paulette Andaverde",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:30PM - 4:45PM",
          "Wednesday": "11:00AM - 12:45PM",
          "Thursday": "2:30PM - 4:45PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Edinburg",
      "tutorName": "Alex Castro",
      "days": {
          "Monday": "12:00PM - 1:00PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Edinburg",
      "tutorName": "Angelina Anthony",
      "days": {
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2413",
      "courseName": "Calculus I",
      "campus": "Edinburg",
      "tutorName": "Humberto Escobedo",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "2:00 PM - 05:00 PM",
          "Wednesday": "11:00 AM - 12:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MATH 2414 ----
  {
      "courseCode": "MATH 2414",
      "courseName": "Calculus II",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MATH 2414",
      "courseName": "Calculus II",
      "campus": "Edinburg",
      "tutorName": "Angelina Anthony",
      "days": {
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MATH 2415 ----
  {
      "courseCode": "MATH 2415",
      "courseName": "Calculus III",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 1101 ----
  {
      "courseCode": "MECE 1101",
      "courseName": "Intro to Mechanical Engineering",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 1101",
      "courseName": "Intro to Mechanical Engineering",
      "campus": "Edinburg",
      "tutorName": "Angelina Anthony",
      "days": {
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 1101",
      "courseName": "Intro to Mechanical Engineering",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- MECE 1221 ----
  {
      "courseCode": "MECE 1221",
      "courseName": "Engineering Graphics",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 1221",
      "courseName": "Engineering Graphics",
      "campus": "Edinburg",
      "tutorName": "Leonardo Alejandre",
      "days": {
          "Monday": "11:45 AM - 4:45 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:45 AM - 4:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 2140 ----
  {
      "courseCode": "MECE 2140",
      "courseName": "Engineering Materials Lab",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 2140",
      "courseName": "Engineering Materials Lab",
      "campus": "Edinburg",
      "tutorName": "Angelina Anthony",
      "days": {
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 2301 ----
  {
      "courseCode": "MECE 2301",
      "courseName": "Statics",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 2301",
      "courseName": "Statics",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 2301",
      "courseName": "Statics",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- MECE 2302 ----
  {
      "courseCode": "MECE 2302",
      "courseName": "Dynamics",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 2302",
      "courseName": "Dynamics",
      "campus": "Edinburg",
      "tutorName": "Gerardo Castillo",
      "days": {
          "Monday": "11:00 AM - 12:15",
          "Tuesday": "11:00 AM -01:45 PM",
          "Wednesday": "11:00 AM - 12:15",
          "Thursday": "11:00 AM -01:45 PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 2340 ----
  {
      "courseCode": "MECE 2340",
      "courseName": "Engineering Materials",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 2340",
      "courseName": "Engineering Materials",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- MECE 3315 ----
  {
      "courseCode": "MECE 3315",
      "courseName": "Fluid Mechanics",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
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
          "Monday": "11:00 AM - 12:15 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:00 AM - 04:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 3335",
      "courseName": "Thermodynamics I",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- MECE 3336 ----
  {
      "courseCode": "MECE 3336",
      "courseName": "Thermodynamics II",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 3336",
      "courseName": "Thermodynamics II",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "MECE 3336",
      "courseName": "Thermodynamics II",
      "campus": "Edinburg",
      "tutorName": "Leonardo Alejandre",
      "days": {
          "Monday": "11:45 AM - 4:45 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:45 AM - 4:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 3360 ----
  {
      "courseCode": "MECE 3360",
      "courseName": "Heat Transfer",
      "campus": "Edinburg",
      "tutorName": "Leonardo Alejandre",
      "days": {
          "Monday": "11:45 AM - 4:45 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "11:45 AM - 4:45 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 3385 ----
  {
      "courseCode": "MECE 3385",
      "courseName": "Mechanical Vibrations",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 3404 ----
  {
      "courseCode": "MECE 3404",
      "courseName": "Mech Engineering Analysis",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE 3440 ----
  {
      "courseCode": "MECE 3440",
      "courseName": "Mechanical Engineering Anaylsis I",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- MECE 3450 ----
  {
      "courseCode": "MECE 3450",
      "courseName": "Mech Engineering Analysis II",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "MECE 3450",
      "courseName": "Mech Engineering Analysis II",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- MECE 4322 ----
  {
      "courseCode": "MECE 4322",
      "courseName": "Intro Finite Elements",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MECE3335 ----
  {
      "courseCode": "MECE3335",
      "courseName": "Thermodynamics I",
      "campus": "Edinburg",
      "tutorName": "Adrian Robledo",
      "days": {
          "Monday": "09:00AM - 12:00PM",
          "Tuesday": "12:30PM - 3:30PM",
          "Wednesday": "4:00PM - 8:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- MGMT 3361 ----
  {
      "courseCode": "MGMT 3361",
      "courseName": "Principles of Management",
      "campus": "Edinburg",
      "tutorName": "Alexis Aguilar",
      "days": {
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 1116 ----
  {
      "courseCode": "MUSI 1116",
      "courseName": "SS &ET I",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 1117 ----
  {
      "courseCode": "MUSI 1117",
      "courseName": "SS &ET II",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 1211 ----
  {
      "courseCode": "MUSI 1211",
      "courseName": "Music Theory I",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 1212 ----
  {
      "courseCode": "MUSI 1212",
      "courseName": "Music Theory II",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 1301 ----
  {
      "courseCode": "MUSI 1301",
      "courseName": "Fundamentals of Music",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 2116 ----
  {
      "courseCode": "MUSI 2116",
      "courseName": "SS &ET III",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 2117 ----
  {
      "courseCode": "MUSI 2117",
      "courseName": "SS &ET IV",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 2211 ----
  {
      "courseCode": "MUSI 2211",
      "courseName": "Music Theory III",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 2212 ----
  {
      "courseCode": "MUSI 2212",
      "courseName": "Music Theory IV",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- MUSI 3211 ----
  {
      "courseCode": "MUSI 3211",
      "courseName": "Form and Analysis",
      "campus": "Edinburg",
      "tutorName": "Jonathan Gonzalez",
      "days": {
          "Monday": "1:30PM - 4:30PM",
          "Tuesday": "1:30PM - 4:30PM",
          "Wednesday": "1:30PM - 4:30PM",
          "Thursday": "1:30PM - 4:30PM",
          "Friday": "CLOSED"
      }
  },

  // ---- NURSING ----
  {
      "courseCode": "NURSING",
      "courseName": "1st Semester Nursing",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "NURSING",
      "courseName": "2nd Semester Nursing",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "NURSING",
      "courseName": "3rd Semester Nursing",
      "campus": "Edinburg",
      "tutorName": "Francisco Nunez",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "11:00 AM - 04:00 PM",
          "Wednesday": "09:00 AM - 02:00 PM",
          "Thursday": "CLOSED",
          "Friday": "CLOSED"
      }
  },

  // ---- PHYS 1401 ----
  {
      "courseCode": "PHYS 1401",
      "courseName": "General Physics I",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "PHYS 1401",
      "courseName": "General Physics I",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "PHYS 1401",
      "courseName": "General Physics I",
      "campus": "Edinburg",
      "tutorName": "Samuel Marshall",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "CLOSED",
          "Wednesday": "7:00 PM - 8:00PM",
          "Thursday": "CLOSED",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- PHYS 1402 ----
  {
      "courseCode": "PHYS 1402",
      "courseName": "General Physics II",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },
  {
      "courseCode": "PHYS 1402",
      "courseName": "General Physics II",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- PHYS 2425 ----
  {
      "courseCode": "PHYS 2425",
      "courseName": "Physics for Sci & Engr I",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- PHYS 2426 ----
  {
      "courseCode": "PHYS 2426",
      "courseName": "Physics for Sci & Engr II",
      "campus": "Edinburg",
      "tutorName": "Jimmy Minero Reyes",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "1:00 PM - 4:30 PM",
          "Wednesday": "CLOSED",
          "Thursday": "1:00 PM - 4:30 PM",
          "Friday": "9:00 AM - 12:00 PM"
      }
  },

  // ---- QUMT 2341 ----
  {
      "courseCode": "QUMT 2341",
      "courseName": "Business Stats I",
      "campus": "Edinburg",
      "tutorName": "Alexis Aguilar",
      "days": {
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },
  {
      "courseCode": "QUMT 2341",
      "courseName": "Business Stats I",
      "campus": "Edinburg",
      "tutorName": "Fernando Casanova",
      "days": {
          "Monday": "CLOSED",
          "Tuesday": "02:00 PM - 05:00 PM",
          "Wednesday": "03:30 PM - 08:00 PM",
          "Thursday": "02:00 PM - 05:00 PM",
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
          "Monday": "09:45AM - 12:15PM",
          "Tuesday": "09:45AM - 12:15PM",
          "Wednesday": "09:45AM - 12:15PM",
          "Thursday": "09:45AM - 12:15PM",
          "Friday": "CLOSED"
      }
  },

  // ---- STAT 3301 ----
  {
      "courseCode": "STAT 3301",
      "courseName": "Applied Statistics",
      "campus": "Edinburg",
      "tutorName": "Alonso Gonzalez",
      "days": {
          "Monday": "01:00 PM - 04:30 PM",
          "Tuesday": "CLOSED",
          "Wednesday": "CLOSED",
          "Thursday": "01:00 PM - 04:30 PM",
          "Friday": "09:00 AM - 12:00 PM"
      }
  },

];

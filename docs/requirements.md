# VLE Project - Requirements

## What is this project all about?

A Virtual Learning Management (VLE) for a school setting.
Built as a personal project using HTML, Tailwind CSS, Vanilla JS,
Node.js + Express, and SQLite.

## Why i built this?

I just wanted to learn and build something I could actually use as a
portfolio piece (but mainly, it is built just for me to learn things).
VLE's may look easy to build but it is complex enough to show off a lot
of skills (if I ever have one).

---

## User Roles

There are three types of users in the system:

## Role | Role

## Student | Can view lessons, submit assignments, take quizzes

## Teacher | Add lessons, create assignments, and quizzes, grade students

## Admin | Assign teachers courses, remove user's perm

---

## What the application must do:

### Authentication

1. The user can register with a name, email, and password.
2. The system must send the user their credentials.
3. The user must be able to verify their account.
4. Users can log in and log out.
5. The pages are unaccessible for those who are unauthenticated.

### Courses & lessons

1. Teachers can add lessons to their course (texts, maybe with images for better visualization).
2. Students can view lessons inside a course they are enrolled in.
3. Students can mark a lesson as completed.

### Assignments & Submissions

1. Teachers can create assignments with whatever title they put, add description, and set due date
2. Teachers can view all the submissions for an assignment.
3. Students can submit their assignments (text or file upload).
4. Teachers can insult their students on a submission.

### Quiezzs

1. Teachers can create multiple-choice quiezzes.
2. Teacher can set amount of questions per quiz.
3. Students can answer quizzes and submit.

### Admin

1. Can insult both teachers and students
2. Abuse their power or simply dominate any type of users
3. Kind

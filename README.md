# 🎓 Ruhi School Manager

A Complete Multi-School ERP Management System built for modern schools to manage students, staff, attendance, homework, exams, timetables, reports, and school operations from a single platform.

---

## 🚀 Overview

Ruhi School Manager is a production-ready School ERP designed for:

- Individual Schools
- School Chains
- Educational Institutions
- Coaching Centers
- Academies

The platform provides separate school-wise data management while maintaining centralized control through a Platform Super Admin.

---

## ✨ Key Features

### 🏫 Multi-School Management

- Create Multiple Schools
- Separate Data for Every School
- School-Wise Dashboards
- School Activation / Deactivation
- School Logo Management

---

### 👨‍💼 Platform Super Admin

- Manage Schools
- Create School Admins
- Monitor All Schools
- View School Statistics
- View School Staff
- View Reports

---

### 🏢 School Admin

- Manage School Information
- Create Staff Accounts
- Manage Classes
- Manage Students
- Manage Subjects
- Manage Notices
- Generate Reports

---

### 👨‍🏫 Staff Hierarchy System

School Admin can create:

- Principal
- Director
- Vice Principal
- Exam Coordinator
- Class Teacher
- Teacher

All staff login through Teacher Login.

---

### 🎯 Principal Module

- View All Students
- View All Teachers
- View Attendance
- View Marks
- Suspend Students
- Restore Students
- Schedule Tests
- Manage Complaints
- View Analytics

---

### 📊 Director Module

- School Analytics
- Student Reports
- Teacher Reports
- Attendance Reports
- Academic Performance Reports

---

### 📝 Vice Principal Module

- Student Monitoring
- Attendance Monitoring
- Report Viewing
- Suspension Requests
- Approval Workflow

---

### 📚 Exam Coordinator Module

- Create Exams
- Create Class Tests
- Manage Exam Timetable
- Manage School Timetable
- Verify Marks
- Publish Results
- Generate Report Cards

---

### 🧑‍🏫 Class Teacher Module

- Manage Assigned Class
- Add/Edit Students
- Mark Attendance
- Upload Homework
- Upload Marks
- Create Complaints

---

### 👨‍🏫 Teacher Module

- Manage Assigned Subjects
- Upload Subject Marks
- Create Assignments
- View Timetable
- Create Complaints

---

### 🎒 Student Module

- View Attendance
- View Homework
- View Timetable
- View Exam Schedule
- View Results
- View Notices
- View Performance

---

## 📖 Class-Based Student Management

Students are managed inside classes.

Flow:

School → Class → Student

No direct student creation allowed.

---

## 📅 Timetable Management

Only Exam Coordinator can manage:

- Class Timetable
- Teacher Timetable
- Subject Timetable

Features:

- Weekly Timetable Builder
- Conflict Detection
- PDF Export
- Teacher Workload Analysis

---

## 📑 Exam & Marks Hub

### School Admin

- Create Exams
- Schedule Exams

### Teachers

- Upload Subject Marks

### Exam Coordinator

- Verify Marks
- Lock Marks
- Publish Results

### Students

- View Own Results Only

---

## 📋 Attendance System

### Class Teacher

- Daily Attendance

### Principal

- Attendance Override
- Attendance Correction

Reports:

- Daily
- Weekly
- Monthly

---

## 📚 Homework System

Only Class Teacher can:

- Upload Homework
- Edit Homework
- Delete Homework

Students:

- View Homework

No online homework submission.

---

## 📢 Notice Management

Notice Types:

- General
- Holiday
- Exam
- Emergency

Workflow:

Teacher → Principal Approval → Publish

---

## ⚠ Complaint Management

Create complaints for:

- Discipline
- Behaviour
- Homework
- Attendance
- Academic Issues

Visible to:

- Principal
- School Admin
- Related Teacher

---

## 📈 Reports & Analytics

Generate:

- Attendance Reports
- Student Reports
- Teacher Reports
- Exam Reports
- Result Reports
- School Summary Reports

Export:

- PDF
- Excel

---

## 🔔 Notifications

Firebase Cloud Messaging (FCM)

Notifications:

- Attendance Updates
- Homework Updates
- Exam Notifications
- Result Published
- Notices

---

## 🖼 School Logo Management

Upload School Logo:

- Camera
- Gallery

Display On:

- Dashboard
- Notices
- Reports
- Marksheets
- ID Cards

---

## 🔐 Security Features

- JWT Authentication
- bcrypt Password Hashing
- Role-Based Access Control
- School-Wise Data Isolation
- Secure APIs
- Session Management
- Audit Logs

---

## ⚙ Tech Stack

### Frontend

- React.js
- React Router DOM
- React Bootstrap
- Axios
- Context API / Redux

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- MongoDB Compass

### Storage

- Cloudinary

### Notifications

- Firebase Cloud Messaging

### Authentication

- JWT
- bcrypt

---

## 📂 Project Structure

```bash
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── dashboards/
│   ├── auth/
│   ├── services/
│   ├── routes/
│   ├── context/
│   ├── utils/
│   └── assets/
│
└── App.jsx

backend/
│
├── models/
├── routes/
├── controllers/
├── middleware/
├── config/
├── services/
├── utils/
└── server.js
```

---

## 🛠 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/ruhi-school-manager.git

cd ruhi-school-manager
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

---

## 🌍 Environment Variables

Create `.env`

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

FCM_SERVER_KEY=
```

---

## 📱 Login Roles

- Platform Super Admin
- School Admin
- Principal
- Director
- Vice Principal
- Exam Coordinator
- Class Teacher
- Teacher
- Student

---

## 🎯 Future Roadmap

- Parent Portal
- Transport Management
- Hostel Management
- Library Management
- Payroll Management
- Online Fee Management
- AI Reports & Analytics
- Mobile App (Flutter)

---

## 👨‍💻 Developer

### Dilkush Ror

Founder & Developer

📧 Email: ror28dilkush@gmail.com

📞 Phone: +91 9588732288

---

## 📜 License

Copyright © 2026 Ruhi School Manager.

All Rights Reserved.

This software is proprietary and intended for educational institutions using Ruhi School Manager.

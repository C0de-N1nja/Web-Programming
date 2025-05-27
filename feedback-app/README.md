# 📋 Feedback App

A simple feedback collection app built using **Node.js**, **Express.js**, **MongoDB**, and **EJS** — following the **MVC pattern** without using EJS partials.

---

## 📁 Project Structure

```

feedback-app/
├── controllers/
│   └── userController.js        # All controller functions for feedback operations
│
├── models/
│   └── userModel.js             # Mongoose schema/model definition
│
├── routes/
│   └── userRoutes.js            # Route definitions (GET, POST handlers)
│
├── public/
│   └── stylesheets/
│       ├── allusers.css         # Styling for allusers.ejs
│       ├── edituser.css         # Styling for edituser.ejs
│       └── form.css             # Styling for form.ejs
│
├── views/
│   ├── allusers.ejs             # View to display all feedback users
│   ├── edituser.ejs             # Form to edit feedback entry
│   └── form.ejs                 # Form to submit feedback
│
├── index.js                     # Main application entry point
├── package.json
└── README.md

````

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
````

### 2. Make sure MongoDB is running (on localhost:27017)

### 3. Start the app

```bash
nodemon
```

### 4. Open in browser

```
http://localhost:3000/form
```

---

## 📌 Routes Summary

| Route              | Method | Description               |
| ------------------ | ------ | ------------------------- |
| `/form`            | GET    | Show feedback form        |
| `/submit`          | POST   | Submit feedback           |
| `/users`           | GET    | View all feedback entries |
| `/edit?email=...`  | GET    | Edit feedback by email    |
| `/update`          | POST   | Update feedback entry     |
| `/delete`          | POST   | Delete feedback by email  |
| `/search?name=...` | GET    | Search feedback by name   |

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (with Mongoose)
* EJS Templating (No partials used)
* Vanilla CSS (one stylesheet per view)

---

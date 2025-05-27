# Feedback App

A simple feedback application built using Node.js, Express, MongoDB, and EJS. Follows the MVC architecture.

## Features

- Submit feedback via form
- View all feedback
- Edit and update feedback
- Delete feedback
- Search feedback by name

## Tech Stack

- Backend: Node.js, Express.js
- Frontend: HTML, CSS, EJS
- Database: MongoDB
- Architecture: MVC

## Project Structure

```

feedback-app/
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── views/
│   ├── form.ejs
│   ├── allusers.ejs
│   └── edituser.ejs
├── public/
│   └── styles.css
├── index.js
├── package.json
└── README.md

````

## Getting Started

1. Install dependencies:
   ```bash
   npm install
````

2. Start MongoDB and run the app:

   ```bash
   nodemon
   ```

3. Open in browser:

   ```
   http://localhost:3000/form
   ```

## Routes Summary

| Route            | Method | Description             |
| ---------------- | ------ | ----------------------- |
| /form            | GET    | Show feedback form      |
| /submit          | POST   | Submit feedback         |
| /users           | GET    | View all feedback       |
| /edit?email=...  | GET    | Edit feedback by email  |
| /update          | POST   | Update feedback         |
| /delete          | POST   | Delete feedback         |
| /search?name=... | GET    | Search feedback by name |

```
# ✅ Express.js To-Do App 📝

This is a simple **To-Do List backend** built with **Node.js** and **Express.js**. It supports full CRUD functionality and was tested using Postman.

---

## ✨ Features

- Create Task → `POST /tasks`
- Get All Tasks → `GET /tasks`
- Get Single Task → `GET /tasks/:id`
- Update Task → `PUT /tasks/:id`
- Delete Task → `DELETE /tasks/:id`

---

## 🛠️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/C0de-N1nja/Web-Programming.git
cd Web-Programming/express-todo
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node index.js
```

### 4. Test API using Postman at:

```
http://localhost:4000/tasks
```

---

## 📂 Folder Structure

```
express-todo/
├── Assignment_Summary.md        # Summary of the assignment
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Dependency lock file
├── README.md                    # Project documentation
├── Screenshots/                 # Postman API request/response screenshots
│   ├── DELETE_Request.png
│   ├── GET_after_DELETE.png
│   ├── GET_Request.png
│   └── POST_Request.png
└── server.js                    # Main Express.js server file
```

---

## 📬 Sample Request (POST)

```
POST /tasks
Content-Type: application/json

{
  "taskName": "Learn Express.js"
}
```

---

## 🧪 Tools Used

* Node.js
* Express.js
* Postman (for testing)

---

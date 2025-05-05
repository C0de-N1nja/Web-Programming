## ✅ 1. `README.md` 
````markdown
# Express.js To-Do App 📝

This is a simple **To-Do List backend** built with **Node.js** and **Express.js**. It supports full CRUD functionality and was tested using Postman.

## �� Features

- Create Task (`POST /tasks`)
- Get All Tasks (`GET /tasks`)
- Get Single Task (`GET /tasks/:id`)
- Update Task (`PUT /tasks/:id`)
- Delete Task (`DELETE /tasks/:id`)

## 🛠️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/C0de-N1nja/Web-Programming.git
   cd Web-Programming/express-todo
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   node index.js
   ```

4. Test with Postman using:

   ```
   http://localhost:4000/tasks
   ```

## 📂 Folder Structure

```
express-todo/
├── index.js
├── package.json
└── README.md
```

## 📬 Sample Request (POST)

```json
POST /tasks
{
  "taskName": "Learn Express.js"
}
```

## 🧪 Tools Used

* Node.js
* Express.js
* Postman (for testing)

---

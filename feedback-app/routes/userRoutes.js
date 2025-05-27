const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/form", userController.getForm);
router.post("/submit", userController.submitForm);
router.get("/users", userController.getUsers);
router.post("/delete", userController.deleteUser);
router.get("/search", userController.searchUser);
router.get("/edit", userController.getEditUser);
router.post("/update", userController.updateUser);

module.exports = router;

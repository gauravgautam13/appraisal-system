const express = require("express");
const { createUser, getAllUsers, assignRole } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createUser);

router.get("/", authMiddleware, getAllUsers);

router.post("/assign-role", authMiddleware, assignRole);

module.exports = router;

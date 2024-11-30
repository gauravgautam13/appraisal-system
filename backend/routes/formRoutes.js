const express = require("express");
const { createForm, getForms } = require("../controllers/formController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createForm);

router.get("/", authMiddleware, getForms);

module.exports = router;

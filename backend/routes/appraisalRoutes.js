const express = require("express");
const { submitAppraisal, getAppraisals, getAppraisalById } = require("../controllers/appraisalController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/submit", authMiddleware, submitAppraisal);

router.get("/", authMiddleware, getAppraisals);

router.get("/:id", authMiddleware, getAppraisalById);


module.exports = router;

const mongoose = require("mongoose");

const AppraisalSchema = new mongoose.Schema(
  {
    fillerName: { type: String, required: true },
    fillingForName: { type: String, required: true },
    formTitle: { type: String, required: true },
    rating: { type: String, required: true },
    review: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appraisal", AppraisalSchema);

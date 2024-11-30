const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, 
    review: { type: String, required: true }, 
    rating: { type: Number, min: 1, max: 5, required: true },  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", FormSchema);

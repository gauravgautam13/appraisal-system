const Form = require("../models/Form");

// Create a new appraisal form (Admin only)
exports.createForm = async (req, res) => {
  const { title, review, rating } = req.body; // Expecting title, review, and rating

  if (!title || !review || !rating) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const form = new Form({
      title,
      review,
      rating,
    });

    await form.save();
    res.status(201).json(form); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


exports.getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

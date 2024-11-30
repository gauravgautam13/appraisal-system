const User = require("../models/User");

// Create a new user (Admin only)
exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ name: 1 }); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.assignRole = async (req, res) => {
  const { userId, role } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.role = role;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

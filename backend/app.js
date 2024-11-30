const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const formRoutes = require("./routes/formRoutes");
const appraisalRoutes = require("./routes/appraisalRoutes");

const User = require("./models/User");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/forms", formRoutes);
app.use('/api/appraisals', appraisalRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    createAdminUser();
  })
  .catch((err) => console.log(err));

const createAdminUser = async () => {
  try {
    const adminExists = await User.findOne({ role: "admin" });

    if (!adminExists) {
      // const hashedPassword = await bcrypt.hash("password", 10); 

      const newAdmin = new User({
        name: "Admin User",
        email: "admin@example.com",
        password: "password",
        role: "admin",
      });

      await newAdmin.save();
      console.log("Admin user created successfully");
    } else {
      console.log("Admin user already exists");
    }
  } catch (err) {
    console.error("Error creating admin user:", err);
  }
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

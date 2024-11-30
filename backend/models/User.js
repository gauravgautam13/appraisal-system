const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { 
      type: String, 
      enum: ["admin", "manager", "developer", "junior developer"], 
      default: "junior developer" 
    },
    manager: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    peers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    juniors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

// Hash password before saving
// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

module.exports = mongoose.model("User", UserSchema);



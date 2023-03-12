const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, "first name must be less than 50 characters"],
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, "last name must be less than 50 characters"],
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student
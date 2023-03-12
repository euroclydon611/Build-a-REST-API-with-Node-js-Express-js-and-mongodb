const Student = require("../models/student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json({ students });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ student });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const { id: studentID } = req.params;
    const student = await Student.findOne({ _id: studentID });
    if (!student) {
      res.status(404).json({ msg: `Student with id ${studentID} not found` });
    }
    res.status(200).json({ student });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id: studentID } = req.params;
    const student = await Student.findOneAndUpdate(
      { _id: studentID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      res.status(404).json({ msg: `Student with id ${studentID} not found` });
    }
    res.status(200).json({ student });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id: studentID } = req.params;
    const student = await Student.findOneAndDelete({ _id: studentID });

    if (!student) {
      res.status(404).json({ msg: `Student with id ${studentID} not found` });
    }
    res
      .status(200)
      .json({ msg: `Student with id ${studentID} is successfully deleted` });
  } catch (err) {
    res.status(404).json(err.message);
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};

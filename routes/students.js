const express = require("express")
const router = express.Router()


const {getAllStudents, getStudent, createStudent, updateStudent, deleteStudent} = require("../controllers/students")


router.get("", getAllStudents)
router.post("", createStudent)
router.get("/:id", getStudent)
router.patch("/:id", updateStudent)
router.delete("/:id", deleteStudent)


module.exports = router
const express = require("express");
const connectDB = require("./database/students");
const studentsRoutes = require("./routes/students");
const app = express();
const PORT = 5000;


//middleware
app.use(express.json())


//routes
app.use("/api/v1/students", studentsRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(
        `Connected to database and Server is running on port ${PORT}`
      );
    });
  } catch (err) {
    console.log(err.message);
  }
};

startServer();

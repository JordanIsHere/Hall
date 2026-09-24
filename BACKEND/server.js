const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5005;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Pokhara Theatre DRAMA backend is running!"
  });
});

app.listen(PORT, () => {
  console.log(`DRAMA backend running on port ${PORT}`);
});
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const { connectDB, sequelize } = require("./config/db");
const githubRoutes = require("./routes/githubRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database Synced");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/github", githubRoutes);

app.get("/", (req, res) => {
  res.send("GitHub Profile Analyzer API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
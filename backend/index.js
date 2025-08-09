const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./db");
const morgan = require("morgan");

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
   res.send("Welcome to the backend server!");
});

app.get("/foo", (req, res) => {
   res.send("Welcome to the foo endpoint!");
});

dbConnect();

app.listen(process.env.PORT, () => {
   console.log(`Server is running on port ${process.env.PORT}`);
});

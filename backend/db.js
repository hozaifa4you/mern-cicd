const mongoose = require("mongoose");

function dbConnect() {
   mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => {
         console.log("MongoDB connected");
      })
      .catch((err) => {
         console.error("MongoDB connection error:", err);
      });
}

module.exports = dbConnect;

const express = require("express");
const { exec } = require("child_process");

const app = express();

// Normal website jaisa show karega
app.get("/", (req, res) => {
  res.send("RV Server Running 🚀");
});

// Background me V2Ray start
exec("bash start.sh");

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

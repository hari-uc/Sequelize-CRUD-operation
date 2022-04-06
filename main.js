//Server File
//Author : hariuc2001@gmail.com
//Date: 23-03-2022

const express = require("express");
let app = express();
const PORT = 5050;

app.use(express.json());

// Importing Routes from Routes Folder
const router = require("./routes/routes");

// Api router
app.use("/api", router);

// Test API
app.get("/test", (req, res) => {
  res.send("testing success !");
});

//Running Server
app.listen(PORT, (req, res) => {
  console.log("server running");
});

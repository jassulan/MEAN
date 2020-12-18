const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const profilesRoutes = require("./routes/profiles");
const scriptsRoutes = require("./routes/scripts");
const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(
    "link to database"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/scripts", express.static(path.join(__dirname, "scripts")));
app.use("/", express.static(path.join(__dirname, "angular")));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

app.use("/api/profiles", profilesRoutes);
app.use("/api/scripts", scriptsRoutes);
app.use("/api/user", userRoutes);
app.use((req, res, next)=>{
  res.sendFile(path.join(__dirname, "angular","index.html"));
});

module.exports = app;

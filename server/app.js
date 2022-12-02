const e = require("express");
const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const app = express();
const db = mysql.createConnection({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});


// app.set('view engine', 'hbs');

db.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MYSQL connected");
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hey</h1>");
});

app.listen(5000, () => {
  console.log("Server Started on Port 5000");
});

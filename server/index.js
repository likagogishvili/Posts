const express = require("express");
const mysql = require("mysql");

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  hostL: "localhost",
  password: "Likagogishvili1@",
  database: "LoginData",
});

app.get('/', function(req, res){
    res.send({ title: 'GeeksforGeeks' });
});

app.post("/register", (req, res) => {
  db.query("INSERT INTO user (name, lName, email, password) VALUES(?,?,?,?)", [
    registrationData.name,
    registrationData.lname,
    registrationData.email,
    registrationData.password,
  ]);
});

app.listen(3001, () => {
  console.log("running server");
});

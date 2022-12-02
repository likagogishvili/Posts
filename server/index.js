// const express = require("express");
// const mysql = require("mysql");

// const app = express();
// var cors = require("cors");
// app.use(express.json());
// app.use(cors());

// const db = mysql.createConnection({
//   user: "root",
//   hostL: "localhost",
//   password: "Likagogishvili1@",
//   database: "LoginData",
// });

// app.get("/", function (req, res) {
//   res.send({ title: "GeeksforGeeks" });
// });

// app.post("/register", (req, res) => {
//   let registrationData = req.body.data;
//   db.query("INSERT INTO user (name, lName, email, password) VALUES(?,?,?,?)", [
//     registrationData.name,
//     registrationData.lname,
//     registrationData.email,
//     registrationData.password,
//   ]);
// });

// app.post("/login", (req, res) => {
//   let inputedData = req.body.data;
//   console.log(inputedData,"inp")
//   db.query(
//     "Select * from user where email = ? And password = ?",
//     [inputedData.email, inputedData.password],
//     (err, result) => {
//       if (err) {
//         res.send({
//           err: err,
//         });
//       } else {
//         if (result.length) {
//           res.send(result);
//         } else {
//           res.send({
//             message: "Wrong usename/password combination",
//           });
//         }
//       }
//     }
//   );
// });

// app.listen(3001, () => {
//   console.log("running server");
// });

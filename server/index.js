const express = require("express")
const mysql = require("mysql")

const app = express()
app.use(express.json())


const db = mysql.createConnection({
    user:"root",
    hostL: "localhost",
    password : "Likagogishvili1@",
    database:"LoginData"
});

app.post('/register', (req, res) =>{
    db.query("INSERT INTO users (name, lNmae, email, password) VALUES(?,?)", [fName, lName, email, password])
})






app.listen(3001 , ()=>{
    console.log("running server")
})

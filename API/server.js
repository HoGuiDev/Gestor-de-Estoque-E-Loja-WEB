const express = require("express")

const mysql = require("mysql2")

const app = express()
const port = 3000

const db = mysql.createConnection(    //Configura uma conexão com o db
  {
    IP : "192.168.0.101",
    PortDB : "3306",
    Senha : "",
    User : "root",
    db : "Gelados",
  }
)

db.connect(err => {
  if(err){
    console.log("Algo esta errado: " + err)
  }
  else{
    console.log("Vai que é tua!")
  }
})

app.use(express.json())

app.listen(     //Inicia o servidor/API
  port, () => {
    console.log("Conectando ao servidor ...")
  } 
)
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')

require('dotenv').config()

const mysql = require("mysql2")

const jwt = require("jsonwebtoken")

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const db = mysql.createConnection(    //Configura uma conexão com o db
  {
    host: process.env.DB_Host,
    port: process.env.DB_Port,
    password: '',
    database: 'sggl',
    user: process.env.DB_User
  }
)

module.exports = db

//______________________________________________________________________________________________

db.connect(err => {   //Conecta ao banco de Dados
  if(err){
    console.log("Algo esta errado: " + err)
  }
  else{
    console.log("Vai que é tua! ")
  }
})

// Banco de dados

//Pegar dados
app.get("/produtos", (req, res) => {   //Pega informações dos produtos no banco de dados
  db.query("SELECT * FROM sggl.gelados where disponivel = 1", (err, result) => {
    if(result) {
      res.json(result)
    }else{
      res.json(err)
    }
  })
})

//Pegar dados para o gerenciador
app.get("/produtos_gerenciador", (req, res) => {   //Pega informações dos produtos no banco de dados
  db.query("SELECT * FROM sggl.gelados", (err, result) => {
    if(result) {
      res.json(result)
    }else{
      res.json(err)
    }
  })
})

//Deletar Dados
app.delete("/delet", async (req, res) => {
  let query = "DELETE FROM sggl.gelados where id = ?"
  let {id} = req.body

  db.query(query, [id], (err, res) => {
    if (err) {
      console.log(err, id)
    }
  }) 
  res.json("Deletado com sucesso!")
})

//Adicionar dados
app.post("/add", async (req, res) => {
  let {sabor, quantidade, valor, disponivel} = req.body

  let query = 'INSERT INTO sggl.gelados (sabor, quantidade, preço, disponivel) values (?,?,?,?)'
  let valores = [sabor, quantidade, valor, disponivel]

  db.query(query, valores, (err,res) => {
    if(err) {
      console.log(err)
    }
  })
  res.json("Adicionado com sucesso!")
})

//Atualizar dados
app.put('/atualizar', (req, res) => {
  const {sabor, quantidade, preço, ID, disponivel} = req.body

  let query = "UPDATE sggl.gelados SET sabor = ?, quantidade = ?, preço = ?, disponivel = ? WHERE ID = ?"
  let atualizacao = [sabor, quantidade, preço, disponivel, ID]

  db.query(query, atualizacao, (err, res) => {
    if(err) {
      console.error(err)
    }
  })
  res.json(atualizacao)
})


//Login do ADM
app.post("/loginadm", async (req, res) => {


  let {Usuario, Senha} = req.body

  db.query(`SELECT * from sggl.adms where usuario = ?`, [Usuario], async (erro, result) => {
    if(erro){
      res.json("Não foi " + erro)
    }

    var comp = await bcrypt.compare(Senha, result[0].senha)

    if(comp == true){
      let Token = jwt.sign({
        name: Usuario,
        exp: Math.floor(Date.now() / 1000) + 60 * 60},
        process.env.jwt_code)
  
      res.json({Token: Token})
    }
    else{
      res.json("Senha Incorreta!")
    }

  })

})



app.listen(     //Inicia o servidor/API
  port, () => {
    console.log("Conectando ao servidor ...")
  } 
)
const { Router } = require("express")
const router = Router()

const bcrypt = require('bcrypt')
require('dotenv').config()

const pool = require("./Banco-de-Dados/Conecta-DB")


//Pegar dados para o gerenciador
router.get("/get_gerenciador", async (req, res) => {   //Pega informações dos produtos no banco de dados
  pool.query("SELECT * FROM sggl.gelados", (err, result) => {
    if(result) {
      res.status(200).json(result)
    }else{
      res.json(err)
    }
  })
})


//Adicionar dados
router.post("/add", async (req, res) => {

  let {sabor, quantidade, valor, disponivel} = req.body

  let query = 'INSERT INTO sggl.gelados (sabor, quantidade, preço, disponivel) values (?,?,?,?)'
  let valores = [sabor, quantidade, valor, disponivel]

  pool.query(query, valores, (err, result) => {
    if(err) {
      console.log(err)
    }
    res.status(200).json({1: "Adicionado com sucesso!"})
  })
})


//Deletar Dados
router.delete("/delet", async (req, res) => {

  let query = "DELETE FROM sggl.gelados where id = ?"
  let {id} = req.body

  pool.query(query, [id], (err, res) => {
    if (err) {
      console.log(err, id)
    }
  }) 
  res.status(200).json("Deletado com sucesso!")
})


//Atualizar dados
router.put('/atualizar', async (req, res) => {
  const {sabor, quantidade, preço, ID, disponivel} = req.body

  let query = "UPDATE sggl.gelados SET sabor = ?, quantidade = ?, preço = ?, disponivel = ? WHERE ID = ?"
  let atualizacao = [sabor, quantidade, preço, disponivel, ID]

  pool.query(query, atualizacao, (err, res) => {
    if(err) {
      console.error(err)
    }
  })
  res.status(200).json("Produto Atualizado!")
})
module.exports = router

router.post('/addWorker', async (req, res) => {
  const {Usuario, Senha} = req.body

  try {
    var cript = await bcrypt.hash(Senha, 12)

    if(Usuario !== "") {
      if(Senha !== "") {
        let query = "INSERT INTO sggl.adms (usuario, senha) value (?,?)"
        let dados = [Usuario, cript]

        pool.query(query, dados, (err, result) => {
          if(err) {
            console.log(err)
          }
          res.status(200).json("Usuario adicionado com sucesso!")
        })
      }
      else {
        res.status(401).json("Usuario ou Senha Incorreto!")
      }
    }
    else {
      res.status(401).json("Usuario ou Senha Incorreto!")
    }
  }
  catch (err) {
    res.status(401).json(err)
  }
})
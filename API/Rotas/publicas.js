const { Router } = require("express")
const router = Router()

const pool = require("./Banco-de-Dados/Conecta-DB")

const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require('dotenv').config()

//Pegar dados
router.get("/produtos", async (req, res) => {   //Pega informações dos produtos no banco de dados
  pool.query("SELECT * FROM sggl.gelados where disponivel = 1", (err, result) => {
    if(result) {
      res.status(200).json(result)
    }else{
      res.status(400).json(err)
    }
  })
})


//Login do ADM
router.post("/loginadm", async (req, res, next) => {


  let {Usuario, Senha} = req.body

  try {
    const [rows] = await pool.promise().query(`SELECT * from sggl.adms where usuario = ?`, [Usuario])
  
    if (rows.length === 0) {
      res.status(401).json({Erro: "Usuario não encontrado!"})
    }
  
    const user = rows[0]
    const comp = await bcrypt.compare(Senha, user.senha)
  
    if (comp == true) {
      const Token = jwt.sign({ name: Usuario }, process.env.jwt_code, { expiresIn: '1m' })
      res.status(200).json({Token})
    }
    else {
      res.status().json("Senha Incorreta!")
    }
  }
  catch(err) {
    next(err)
  }
})


module.exports = router
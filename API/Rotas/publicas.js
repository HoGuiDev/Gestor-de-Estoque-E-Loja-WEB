const { Router } = require("express")
const router = Router()

const pool = require("./Banco-de-Dados/Conecta-DB")

const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require('dotenv').config()

//Pegar dados
router.get("/produtos", async (req, res) => {   //Pega informações dos produtos no banco de dados

  pool.query("SELECT * FROM sggl.gelados where disponivel = 1", (err, result) => {
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(400).json(err)
    }
  })
})


//Login do ADM
router.post("/loginadm", async (req, res, next) => {

  let { Usuario, Senha } = req.body

  try {
    const [pesquisa] = await pool.promise().query(`SELECT * from sggl.adms where usuario = ?`, [Usuario])

    if (pesquisa.length === 0) {
      res.status(401).json("Usuario não encontrado!")
    }
    else {
      let user = pesquisa[0]
      let compara = await bcrypt.compare(Senha, user.senha)

      if (compara === true) {
        const Token = jwt.sign({ name: Usuario }, process.env.jwt_code, { expiresIn: '1h' })
        res.cookie('authToken', Token, {
          httpOnly: true,
          secure: false, //Utilizar em produção, pois precisa do *HTTPS*
          sameSite: 'strict',
          maxAge: 12 * 60 * 60 * 1000, //Da umas 12 horas mantido guardado
        }).send({erro: "Cookie salvo com sucesso!"}).status(200)

        //res.status(200).json({token: Token, verificar: true}) <-- Obsoleto, depois retirar!
      }
      else {
        res.status(401).json("Usuario ou senha incorreto!")
      }
    }
  }
  catch (err) {
    next(err)
  }
})


module.exports = router
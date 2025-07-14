const express = require('express')
const { Router } = require("express")
const cors = require('cors')
require('dotenv').config()

const RotasPublicas = require('./Rotas/publicas')
const RotasPrivadas = require("./Rotas/privadas")
const Middleware = require("./Rotas/Middleware/middleware")

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use("/api", RotasPublicas)

app.use("/api", Middleware, RotasPrivadas)


app.listen(     //Inicia o servidor/API
  port, () => {
    console.log("Conectando ao servidor ...")
  } 
)
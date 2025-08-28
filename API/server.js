const express = require('express')
const { Router } = require("express")
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const RotasPublicas = require('./Rotas/publicas')
const RotasPrivadas = require("./Rotas/privadas")
const Middleware = require("./Rotas/Middleware/middleware")

const app = express()
const port = 3000

app.use(cookieParser())

app.use(cors({
  origin: process.env.Origem,
  credentials: true
}))
app.use(express.json())

app.use("/api", RotasPublicas)

app.use("/api", Middleware, RotasPrivadas)


app.listen(     //Inicia o servidor/API
  port, () => {
    console.log("Conectando ao servidor ...")
  } 
)
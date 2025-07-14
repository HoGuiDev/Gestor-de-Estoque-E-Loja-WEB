const { Router } = require("express")
const router = Router()

const mysql = require("mysql2")
require('dotenv').config()

const pool = mysql.createPool({
  host: process.env.DB_Host,
  port: process.env.DB_Port,
  password: '',
  database: 'sggl',
  user: process.env.DB_User,
  connectionLimit: 50
})

module.exports = pool
const jwt = require("jsonwebtoken")
require('dotenv').config()

module.exports = function auth(req, res, next) {

  const token = req.cookies.authToken


  if (!token) {// Se não tiver token
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  //Verifica se o token é valido
  jwt.verify(token, process.env.jwt_code, (err, payload) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' })
    }

    req.user = payload
    next()

  })

}

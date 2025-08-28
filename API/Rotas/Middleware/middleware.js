const jwt = require("jsonwebtoken")
require('dotenv').config()

module.exports = function auth(req, res, next) {
  //const authHeader = req.headers['authorization']
  const token = req.cookie.authToken
  //const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  jwt.verify(token, process.env.jwt_code, (err, payload) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' })
    }

    req.user = {token: payload}
    next()

  })

}

/* Librerías */
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const crypto = require('crypto')
const db = require('./db')
require('dotenv').load()

/* Rutas */
const index = require('./routes/index')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(cors({
  credentials: true,
  origin: process.env.ORIGIN
}))

app.get('/posts', (req, res) => {
  if (req.signedCookies.user) {
    res.status(200)
    res.send([{
      title: "Hello World",
      description: "Hi there, How are you"
    }])
  } else {
    res.send("No autorizado")
  }
})

app.post('/logout', (req, res) => {
  res.clearCookie('user')
  res.send('a')
})

app.get('/main', (req, res) => {
  if (req.signedCookies.user) {
    res.status(200)
    res.send('a'/*TODO*/)
  } else {
    res.send("No autorizado")
  }
})

app.get('/reservas', (req, res) => {
  db.any('select * from "v_Reservas"')
    .then(data => {
      res.json(data)
    })
})

app.post('/login', (req, res) => {
  let hash = crypto.createHash('md5').update(req.body.password).digest('hex')
  let user = req.body.user
  db.one('SELECT * FROM "Usuarios" WHERE "user" = $1', [user])
    .then(data => {
      if (data.password == hash) {
        res.cookie('user', user, {
          httpOnly: true,
          signed: true,
          //secure: true For production
        })   
        res.send({"user":user, "state": 'ok'})
      } else {
        res.send({"user":null, "state": 'error'})
      }
    })
    .catch(e => {
      res.send({"user":null, "state": 'error'})
    })
})

let port = process.env.PORT || 8081
app.listen(port)
console.log(`Running at http://localhost:${port}`);

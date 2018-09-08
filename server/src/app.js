const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.unsubscribe(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World",
      description: "Hi there, How are you"
    }]
  )
})

let port = process.env.PORT || 8081 
app.listen(port)
console.log(`Running at http://localhost:${port}`);

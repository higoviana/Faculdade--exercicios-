const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/marcelo', (req, res) => {
  res.send('MARCELO!')
})

app.get('/carmino', (req, res) => {
  res.send('Carmino!')
})

app.listen(port, () => {
  console.log(`ok...escutando porta ${port}`)
})
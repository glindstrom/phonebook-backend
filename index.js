const express = require('express')
const app = express()

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada LoveLace",
    number: "39-44-5323523",
    id: 4
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 4
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 3
  }

]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send('<div>Phonebook has info for ' + persons.length + ' people</div><div>'+ new Date() +'</div>')
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)
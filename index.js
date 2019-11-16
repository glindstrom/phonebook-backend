const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada LoveLace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(p => p.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.post("/api/persons", (request, response) => {
  console.log(request.body);
  const person = request.body;
  const id = Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
  person.id = id;
  persons = persons.concat(person);

  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(p => p.id !== id);

  response.status(204).end();
});

app.get("/info", (request, response) => {
  response.send(
    "<div>Phonebook has info for " +
      persons.length +
      " people</div><div>" +
      new Date() +
      "</div>"
  );
});

const port = 3001;
app.listen(port);
console.log(`Server running on port ${port}`);

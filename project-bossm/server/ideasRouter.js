const express = require('express')
const ideasRouter = express.Router()

const ideas = [
  { id: '1', idea: 'Take a nap' },
  { id: '2', idea: 'Go to bed' },
  { id: '3', idea: 'Change the world' }
];

ideasRouter.get('/', (req, res) => {
    res.send(ideas)
})
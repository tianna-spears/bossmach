const express = require('express')
const minionsRouter = express.Router()

const minions = [
  { id: '1', name: 'Kevin' },
  { id: '2', name: 'Stuart' },
  { id: '3', name: 'Bob' }
];

minionsRouter.get('/minions', (req, res, next) => {
    res.send(minions)
})

module.exports = minionsRouter;
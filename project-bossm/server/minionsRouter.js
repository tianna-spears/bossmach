const express = require('express')
const minionsRouter = express.Router()

const minions = [
  { id: '1', name: 'Kevin' },
  { id: '2', name: 'Stuart' },
  { id: '3', name: 'Bob' }
];

minionsRouter.get('/', (req, res, next) => {
    res.send(minions);
})

minionsRouter.post('/', (req, res, next) => {
  const newMinion = req.body;
  res.send(newMinion)
})

minionsRouter.get('/:minionId', (req,res) => {
  const getMinion = minions.id;
  res.send(getMinion)
})

minionsRouter.put('/:minionId', (req, res, next) => {
  const updateMinion = minions.push(id)
  res.send(updateMinion)
})

minionsRouter.delete('/:minionId', (req, res, next))

module.exports = minionsRouter;
const express = require('express')
const minionsRouter = express.Router()
const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require('./db')

minionsRouter.get('/', (req, res, next) => {
  const allMinions = getAllFromDatabase('minions')
    res.send(allMinions);
})

minionsRouter.post('/', (req, res, next) => {
  const newMinion = addToDatabase('minions', req.body)
  if (!newMinion) {
    res.status(400).send('Please create new minion.')
  }  
    res.status(201).send(newMinion)
})

minionsRouter.get('/:minionId', (req,res) => {
  const getMinion = getFromDatabaseById('minion')
  res.send(getMinion)
})

minionsRouter.put('/:minionId', (res, next) => {
  const updateMinion = updateInstanceInDatabase('minion')
  res.send(updateMinion)
})

minionsRouter.delete('/:minionId', (res, next) =>{
  const deleteMinion = deleteFromDatabasebyId('minion')
  res.send(deleteMinion)
})

module.exports = minionsRouter;
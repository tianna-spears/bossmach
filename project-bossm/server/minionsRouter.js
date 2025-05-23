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
    return res.status(400).send('Please create a valid minion.')
  }  
    res.status(201).send(newMinion)
})

minionsRouter.get('/:minionId', (req, res, next) => {
  const getMinion = getFromDatabaseById('minions', req.params.minionId)
  if (!getMinion) {
    return res.status(404).send('Minion not found.')
  }
    res.status(200).send(getMinion);
})

minionsRouter.put('/:minionId', (req, res, next) => {
  req.body.id = req.params.minionId;
  const updateMinion = updateInstanceInDatabase('minions', req.body)
  if (!updateMinion) {
    return res.status(404).send('Minion not updated');
  }
    res.status(200).send(updateMinion);
})

minionsRouter.delete('/:minionId', (req, res, next) =>{
  const deleteMinion = deleteFromDatabasebyId('minions', req.params.minionId)
  if (!deleteMinion) {
    return res.status(404).send('Could not delete your minion.')
  }
    res.status(204).send(deleteMinion)
})

module.exports = minionsRouter;
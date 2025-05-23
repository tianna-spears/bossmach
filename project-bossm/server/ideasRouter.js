const express = require('express')
const ideasRouter = express.Router()

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require('./db')

ideasRouter.get('/', (req, res, next) => {
  const allIdeas = getAllFromDatabase('ideas')
  res.send(allIdeas)
})

ideasRouter.post('/', (req, res, next) => {
  const createIdea = addToDatabase('ideas', req.body)
  if (!createIdea) {
    res.status(400).send('Idea not created.')
  }
    res.status(201).send(createIdea)
})

ideasRouter.get('/:ideaId', (req, res, next) => {
  const getIdea = getFromDatabaseById('ideas', req.params.ideaId)
  if (!getIdea) {
    res.status(404).send('Idea with this ID not found.')
  }
    res.status(200).send(getIdea)
})

ideasRouter.put('/:ideaId', (req, res, next) => {
  req.body.id = req.params.ideaId
  const updatedIdea = updateInstanceInDatabase('ideas', req.body)
  if(!updatedIdea) {
    res.status(404).send('Idea not updated')
  }
    res.status(200).send(updatedIdea)
})

ideasRouter.delete('/:ideaId', (req, res, next) => {
  const deleteIdea = deleteFromDatabasebyId('ideas', req.params.ideaId)
  if(!deleteIdea) {
    res.status(401).send('Idea not deleted.')
  }
    res.status(204).send(deleteIdea)
})

module.exports = ideasRouter;
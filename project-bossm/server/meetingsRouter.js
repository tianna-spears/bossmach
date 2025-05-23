const express = require('express')
const meetingsRouter = express.Router()
const {
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase
} = require('./db')


meetingsRouter.get('/', (req, res, next) => {
    const getMeetings = getAllFromDatabase('meetings')
    res.send(getMeetings)
})

meetingsRouter.post('/', (req, res, next) => {
  const newMeeting = addToDatabase('meetings', req.body)
  if(!newMeeting){
    return res.status(400).send('New meeting not created.')
  }
    res.status(201).send(newMeeting)
})

meetingsRouter.delete('/', (req, res, next) => {
  const deleteMeetings = deleteAllFromDatabase('meetings')
  if(!deleteMeetings) {
    res.status(404).send('Meetings not deleted.')
  }
    res.status(204).send();
})

module.exports = meetingsRouter;
const express = require('express')
const meetingsRouter = express.Router;

const meetings = [
  { id: '1', date: 'May 21' },
  { id: '2', date: 'May 28' },
  { id: '3', date: 'May 31' }
];

meetingsRouter.get('/', (req,res) => {
    res.send(meetings)
})
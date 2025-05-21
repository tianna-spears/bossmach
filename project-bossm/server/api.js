const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minionsRouter')
const ideasRouter = require('./ideasRouter')
const meetingsRouter = require('./meetingsRouter')

apiRouter('/minions', minionsRouter)
apiRouter('/ideas', ideasRouter)
apiRouter('/meetings', meetingsRouter)


module.exports = apiRouter;

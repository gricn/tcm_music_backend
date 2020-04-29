// ./routes/index.js
const api = require('./api')
const getopenid = require('./getopenid')
const register = require('./register')
const test = require('./test')
const isregistered = require('./isregistered')


module.exports = app => {
  app.use('/api', api)
  app.use('/getopenid', getopenid)
  app.use('/register',register)
  app.use('/test',test)
  app.use('/isregistered',isregistered)
  // etc..
}
// ./routes/index.js
const api = require('./api')
const getopenid = require('./getopenid')
const register = require('./register')
const test = require('./test')
const isregistered = require('./isregistered')
const getusergender = require('./getusergender')


module.exports = app => {
  app.use('/api', api)
  app.use('/getopenid', getopenid)
  app.use('/register',register)
  app.use('/test',test)
  app.use('/isregistered',isregistered)
  app.use('/getusergender',getusergender)
  // etc..
}
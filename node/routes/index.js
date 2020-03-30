// ./routes/index.js
const apiRoutes = require('./api')
const loginRoutes = require('./login')
const registerRoutes = require('./register')
module.exports = app => {
  app.use('/api', apiRoutes)
  app.use('/login', loginRoutes)
  app.use('/register',registerRoutes)
  // etc..
}
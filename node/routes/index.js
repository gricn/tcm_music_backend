// ./routes/index.js
const apiRoutes = require('./api')
const loginRoutes = require('./login')
module.exports = app => {
  app.use('/api', apiRoutes)
  app.use('/login', loginRoutes)
  // etc..
}
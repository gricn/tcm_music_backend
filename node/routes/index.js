// ./routes/index.js
const api = require('./api')
// const public = require('./public')
module.exports = app => {
  app.use('/api', api)
  // app.use('/public', public)
  // etc..
}
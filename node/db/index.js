var config = require('./config.json')
const { Pool } = require('pg')
const pool = new Pool(config)

module.exports = {
  on:() => pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client:\n', err)
    process.exit(-1)
  }),
  query: (text, params) => pool.query(text, params),
}
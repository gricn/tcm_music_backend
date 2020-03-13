var config = require('./config.json')
const { Pool } = require('pg')
const pool = new Pool(config)
module.exports = {
  query: (text, params) => pool.query(text, params),
}
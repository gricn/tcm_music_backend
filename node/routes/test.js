const express = require('express')
// const app = express()
const test = express.Router()
const db = require('../db')



test.post('/', async (req, res) => {
    try {
        console.log(req.body)
        res.send("hello!")
    } catch (e) {
        console.log(e)
    }

})


module.exports = test
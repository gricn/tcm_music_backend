const express = require('express')
// const app = express()
const registerRoutes = express.Router()
const db = require('../db')



registerRoutes.post('/', async (req, res) => {
    try {
        console.log(req.body)
        res.send("hello!")
    } catch (e) {
        console.log(e)
    }

})


module.exports = registerRoutes
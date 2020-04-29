const express = require('express')
const register = express.Router()
const db = require('../db')



register.post('/', async (req, res) => {
    try {
        const reqBody = req.body
        await db.query('insert into userinfo(openid, gender,age,province_id)\
         values ($1,$2,$3,$4)',[reqBody.openid, reqBody.gender, reqBody.age, reqBody.location])
    } catch (e) {
        console.log(e)
    }

})


module.exports = register
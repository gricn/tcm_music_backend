const express = require('express')
const register = express.Router()
const db = require('../db')



register.post('/', async (req, res) => {
    try {
        const reqBody = req.body
        const numQuery = await db.query('select count(openid) from userinfo where openid = $1',[reqBody.openid])
        const openidnum = numQuery.rows[0].count

        if(openidnum == 0){
            await db.query('insert into userinfo(openid, gender,age,province_id)\
         values ($1,$2,$3,$4)',[reqBody.openid, reqBody.gender, reqBody.age, reqBody.location])
         res.send(true)
        } else{
            res.send(false)
        }
        
    } catch (e) {
        console.log(e)
    }

})


module.exports = register
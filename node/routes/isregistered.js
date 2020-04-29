const express = require('express')
const isregistered = express.Router()
const db = require('../db')



isregistered.get('/:id', async (req, res) => {
    try {
        
        const id  = req.params.id
        console.log(id)
        const {rows} = await db.query('select count(openid) from userinfo where openid = $1', [id])
        // console.log('result:' + JSON.stringify(rows))
        if (rows[0].count != "0")
            res.send(true)
        else
            res.send(false)
    } catch (e) {
        console.log(e)
    }

})


module.exports = isregistered
const express = require('express')
const getusergender = express.Router()
const db = require('../db')



getusergender.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const { rows } = await db.query('select gender from userinfo where openid = $1', [id])
        
        res.send(rows[0])
    } catch (e) {
        console.log(e)
    }

})


module.exports = getusergender
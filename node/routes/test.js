const express = require('express')
// const app = express()
const test = express.Router()
const db = require('../db')

test.post('/', async (req, res) => {
    try {
        console.log(req.body)
        res.send("Server has received test results. Thanks for your paticipating.")
        var reqBody = req.body
        var openid = reqBody.openid
        var testtimes = reqBody.testtimes
        var question_id = ""

        reqBody.index.forEach((type, i) => {
            type.forEach((question, j)=>{
                var tmp1 = i+1
                var tmp2 = j+1
                question_id = "t" + tmp1 + "_" + tmp2
                question_value = reqBody.index[i][j].sliderValue
                //question.value
                const { rows } = db.query(
                    'insert into testdetail(openid, test_times, question_id, question_value) \
                    values($1, $2, $3, $4)',
                    [openid, testtimes, question_id, question_value])
            })
        })

    } catch (e) {
        console.log(e)
    }

})

module.exports = test
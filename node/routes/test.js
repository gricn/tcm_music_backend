const express = require('express')
// const app = express()
const test = express.Router()
const db = require('../db')

test.post('/', async (req, res) => {
    try {
        res.send("Server has received test results. Thanks for your paticipating.")
        var reqBody = req.body
        var openid = reqBody.openid
        var question_id = ""

        var queryResult = await db.query("select max(test_times) from testdetail \
            where question_id = 't1_1' and openid= $1", [openid])

        var testtimes = (queryResult == undefined) ? 1 : queryResult.rows[0].max + 1

        await reqBody.index.forEach(async (type, i) => {
            type.forEach(async (question, j) => {
                var tmp1 = i + 1
                var tmp2 = j + 1
                question_id = "t" + tmp1 + "_" + tmp2
                question_value = reqBody.index[i][j].sliderValue

                await db.query(
                    'insert into testdetail(openid, test_times, question_id, question_value) \
                    values($1, $2, $3, $4)',
                    [openid, testtimes, question_id, question_value])
            })
        })
        console.log('服务器存储testtimes成功，值为：' + testtimes)
    } catch (e) {
        console.log(e)
    }
})

module.exports = test
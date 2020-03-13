const loginRoutes = require('express').Router()
const fetch = require('node-fetch')
const db = require('../db')
const config = require('./getOpenidConfig.json')

loginRoutes.get('/:code', async (req, res) => {
	var url = ""
	var temp = ""

	try {
		// Prepare data
		var code = req.params.code
		const appId = config.appId
		const appSecret = config.appSecret

		url = "https://api.weixin.qq.com/sns/jscode2session?appid=" +
			appId + "&secret=" +
			appSecret + "&js_code=" +
			code +
			"&grant_type=authorization_code"

		// Run
	} catch (e) {
		console.log(e)
	} finally {
		fetch(url)
			.then(res => res.json())
			.then(json => {
				temp = json.openid

				if (temp != "") {
					const { rows } = db.query("insert into login(openid) values($1) returning *", [temp])
					console.log(rows)
				}else{
					console.log("temp is empty")
				}

				console.log("Get openid successfully: " + temp)
			})
			.catch(err => console.log(err))

		
		res.end("Get openid successfully")
	}
})


module.exports = loginRoutes
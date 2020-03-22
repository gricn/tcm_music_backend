const loginRoutes = require('express').Router()
const fetch = require('node-fetch')
const db = require('../db')
const config = require('./getOpenidConfig.json')

loginRoutes.get('/:code', async (req, res) => {
	let url = ""
	let temp = { value: "" }

	function getTempValue(temp, json) {
		temp.value = json.openid
	}

	try {
		// Prepare data
		var code = req.params.code
		const appId = config.appId
		const appSecret = config.appSecret

		if(code == 'undefined'){
			console.error("code undefined")
			// res.status(410).send("Bug: code undefined")
		}
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

				getTempValue(temp, json)
				return json.openid
			})
			.then(data => {
				if (temp.value != "") {
					const { rows } = db.query("insert into login(openid) values($1) returning *", [temp.value])
					console.log(rows)
					res.send(data)
					console.log("Get openid successfully: " + temp.value)
				} else {
					console.log("temp.value is empty")
					res.statusCode = 177;
					return res.json({
						status: "error"
					});
				}

			})
			.catch(err => console.log(err))
	}
})


module.exports = loginRoutes
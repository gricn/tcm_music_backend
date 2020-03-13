const app = require('express')
const router = require('express').Router()
const db = require('../db')
const request = require('request')
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('select * from test')
    res.send(rows)
  } catch (e) {
    console.log(e)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { rows } = await db.query("SELECT * FROM test WHERE id = $1", [id])
    res.send(rows)
  }
  catch (e) {
    console.log(e)
  }
})


router.get('/song/:id', async (req, res) => {
  let url = ""
  try {
    const { id } = req.params
    url = "http://localhost:3000/song/url?id=" + id
  }
  catch (e) {
    console.log(e)
  } finally {
    fetch(url)
      .then(res => res.json())
      .then(json => res.send(json.data[0].url))
    // console.log(res.)
  }
})

 //   /api/poster/

 router.get('/poster/:id', async (req, res) => {
  let url = ""
  try {
    const { id } = req.params
    url = "http://localhost:3000/song/detail?ids=" + id
  }
  catch (e) {
    console.log(e)
  } finally {
    fetch(url)
      .then(res => res.json())
      .then(json => res.send(json.songs[0].al.picUrl))
    // console.log(res.)
  }
})


module.exports = router
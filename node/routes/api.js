const api = require('express').Router()
const db = require('../db')
const fetch = require('node-fetch')


api.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('select * from musiclist')
    res.send(rows)
  } catch (e) {
    console.log(e)
  }
})

api.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { rows } = await db.query("SELECT * FROM musiclist WHERE num = $1", [id])
    res.send(rows)
  }
  catch (e) {
    console.log(e)
  }
})

// const port = 2333
api.get('/song/:id', async (req, res) => {
  let url = ""
  try {
    const { id } = req.params
    url = "http://localhost:2333/song/url?id=" + id
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

api.get('/poster/:id', async (req, res) => {
  let url = ""
  try {
    const { id } = req.params
    // url = "http://localhost:" + port + "/song/url?id=" + id
    url = "http://localhost:2333/song/detail?ids=" + id
  }
  catch (e) {
    console.log(e)
  } finally {
    fetch(url)
      .then(res => res.json())
      .then(json => res.send(json.songs[0].al.picUrl))
      .error(err => console.log(err))
    // console.log(res.)
  }
})


module.exports = api
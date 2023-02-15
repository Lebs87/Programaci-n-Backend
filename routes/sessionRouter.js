const express = require('express')
const { Router } = express   
const sessionRouter = Router() 

sessionRouter.get('/', (req, res) => {
  if (req.session.name) {
    console.log(req.session.cookie.expires)
    req.session.cookie.maxAge = 60000
    console.log(req.session.cookie.expires)
    res.send({ user: req.session.name })
  } else {
    res.send({ user: '' })
  }
})

sessionRouter.post('/login', async (req, res) => {
  const user = req.body.user
  req.session.name = user
  res.status(200).send({ description: user })
})

sessionRouter.post('/logout', async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send(`error: ${err}`)
    } else {
      res.redirect('/')
    }
  })
})

module.exports = sessionRouter

const express = require('express')
const router = express.Router({mergeParams: true})
const { User } = require('../models')
// require module 'bcryptjs'

router.get('/new', (req, res) => {
  res.render('registrations/new')
})

router.post('/', async (req, res) => {
  // Create a user with a hashed password using 'bcryptjs'
  // Then store the user id in the session
  // Then redirect to '/top-secret'
})

module.exports = router

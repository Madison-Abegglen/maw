let router = require('express').Router()
let Users = require('../models/user')
let session = require('./session')

// authenticate the session token
router.get('/authenticate', (req, res, next) => {
  if (!req.session.uid) {
    return next(new Error('Invalid Credentials'))
  }
  Users.findOne(req.session.uid)
    .then(user => {
      delete user._doc.hash
      res.send(user)
    })
    .catch(err => {
      next(new Error('Invalid Credentials'))
    })
})

// login & create a new session
router.post('/login', (req, res, next) => {
  Users.findOne({ email: req.body.email })
    .then(user => {
      if (!user) { return next(new Error('Invalid Username or Password')) }
      if (!user.validatePassword(req.body.password)) { return next(new Error('Invalid Username or Password')) }
      delete user._doc.hash
      req.session.uid = user._id
      res.send(user)
    })
    .catch(next)
})

// register & create a new session
router.post('/register', (req, res, next) => {
  // validate password length
  console.log('Register Router')
  if (req.body.password.length < 8) {
    return res.status(401).send({
      error: 'Password must be at least 8 characters'
    })
  }
  // hash password
  req.body.hash = Users.generateHash(req.body.password)
  Users.create(req.body)
    .then(user => {
      // remove password before returning
      delete user._doc.hash
      // set session uid
      req.session.uid = user._id
      res.send(user)
    })
    .catch(err => {
      console.log('[REGISTER ERROR]', err)
      next(new Error('Unable to register'))
    })
})

// logout & delete session
router.delete('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      return next(err)
    }
    return res.send({ message: 'Successfully logged out' })
  })
})

module.exports = { router, session }
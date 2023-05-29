const passport = require('passport')
const { Strategy } = require('passport-local')
const LocalStrategy = require('passport-local').Strategy
const decodedToken = require('./googleauth')
const { logger, loggererr } = require('../log/logger')
const { users } = require('../class/userContainer')

passport.use('login', new LocalStrategy(
  async function (username, password, done) {
    const validateUser = await users.checkUser(username, password)
    if (validateUser.result) {
      return done(null, { username: username })
    } else {
      logger.info(`Usuario o contraseña incorrectos`)
      return done(null, false)
    }
  }
))

passport.use('register', new LocalStrategy(
  async (username, password, done) => {
    if (await users.userInDb(username)) {
      logger.info(`Se intento registrar un usuario existente`)
      return done(null, false)
    } else {
      logger.info(`No se ha podido registrar Usuario.`)
      return done(null, { username: username })
    }
  }
))

passport.serializeUser(function (user, done) {
  done(null, user.username)
})

passport.deserializeUser(function (username, done) {
  done(null, { username: username })
})

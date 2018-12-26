let expressSession = require('express-session')
let MongoStore = require('connect-mongodb-session')(expressSession)

let store = new MongoStore({
  uri: 'mongodb://user:user1111@ds054289.mlab.com:54289/maw-db',
  collection: 'Sessions'
})

store.on('error', error => {
  console.log('[SESSION ERROR]', error)
})

let session = expressSession({
  secret: process.env.SESSIONSECRET || 'Secrets dont make friends',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  },
  store,
  resave: true,
  saveUninitialized: true
})

module.exports = session
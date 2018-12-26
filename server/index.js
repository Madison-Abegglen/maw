let express = require('express')
let bP = require('body-parser')
let cors = require('cors')

// fire up connection to database
require('./server-assets/db/mlab-config')

let server = express()
const PORT = process.env.PORT || 3000 // this is for deployment

let whitelist = ['http://localhost:8080']
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhiteListed = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhiteListed)
  },
  credentials: true
}

// register middleware
server.use(cors(corsOptions))
server.use(bP.json())
server.use(bP.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

// don't re-order content 
// register auth routes before gatekeeper or you'll never get logged in
let auth = require('./server-assets/auth/routes')
server.use(auth.session)
server.use('/auth', auth.router)

// this allows users to get data when not logged in
server.use('*', (req, res, next) => {
  if (req.method == 'GET') {
    return next()
  }
  if (!req.session.uid) {
    return next(new Error('Please login to continue'))
  }
  if (req.method == 'POST') {
    req.body.creatorId = req.session.uid
  }
})

// establish routes

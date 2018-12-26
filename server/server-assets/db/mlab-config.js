const mongoose = require('mongoose')
const connectionString = 'mongodb://user:user1111@ds054289.mlab.com:54289/maw-db'
const connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', () => {
  console.log('CONNECTED TO DATABASE')
})
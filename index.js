const express = require('express')
const path = require('path')
require('dotenv').config()
const cors = require('cors')

// App de Express
const app = express()

//PORT
const port = process.env.PORT || 3000
// Node Server
const server = require('http').createServer(app)
/* export only variable io as ecm5*/

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
})
module.exports.io = io
require('./sockets/socket')
app.use(cors())
app.set('socketio', io)

// Path público
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))
app.use(express.json())

// Mis Rutas
app.use('/ws', require('./routes/routes'))

server.listen(port, (err) => {
  if (err) throw new Error(err)

  console.log('Servidor corriendo en puerto', port)
})

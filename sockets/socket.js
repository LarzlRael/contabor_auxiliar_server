const { io } = require('../index')

// Mensajes de Sockets
io.on('connection', (client) => {
  client.on('connect', () => {})

  client.on('disconnect', () => {})
  client.on('mensaje', (payload) => {
    /* console.log('Mensaje recibido', payload)
    io.emit('mensaje', payload) */
  })
})

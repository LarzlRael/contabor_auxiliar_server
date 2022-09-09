const { io } = require('../index')

// Mensajes de Sockets
io.on('connection', (client) => {
  client.on('connect', () => {
    console.log('cliente conectado')
  })

  client.on('disconnect', () => {
    console.log('cliente desconectado')
  })
})

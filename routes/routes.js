const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('Hola mundo')
})

router.post('/dialogflow', async (req, res) => {
  console.log(req.body.texto)
  console.log(req.body.unidades)
  const { texto, unidades } = req.body
  const io = req.app.get('socketio')

  io.emit('mensaje', {
    texto,
    unidades,
  })
  res.json('se enviaron los datos')
})

module.exports = router

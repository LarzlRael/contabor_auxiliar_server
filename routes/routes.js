const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('Hola mundo')
})

router.post('/dialogflow', async (req, res) => {
  const { unidades } = req.body
  /* console.log(asientoInfo) */
  /* return res.json({ text: body.texto }) */
  const io = req.app.get('socketio')

  io.emit('mensaje', {
    unidades,
    cuenta
  })
  res.json('se enviaron los datos')
})

module.exports = router

const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('Hola mundo')
})

router.post('/dialogflow', async (req, res) => {
  const { body } = req
  console.log(body)
  /* return res.json({ text: body.texto }) */
  const io = req.app.get('socketio')

  io.emit('mensaje', body.texto)
  res.json({
    text: body.texto,
  })
})

module.exports = router

const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('Hola mundo')
})

router.post('/dialogflow', async (req, res) => {
  console.log(req.body)
  const {
    unidades,
    cuenta,
    ingresos,
    currency,
    df,
    it,
    pago,
    amount,
  } = req.body
  const io = req.app.get('socketio')

  io.emit('mensaje', {
    unidades,
    cuenta,
    ingresos,
    currency,
    df,
    it,
    pago,
    amount,
  })
  res.json('se enviaron los datos')
})

module.exports = router

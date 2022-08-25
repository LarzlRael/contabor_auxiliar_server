const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('Hola mundo')
})

router.post('/dialogflow', async (req, res) => {
  const { body } = req
  console.log(body)
  return res.send('que fue')
})
module.exports = router

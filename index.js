const express = require('express')
const app = express()


/* chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build()) */

const port = process.env.PORT || 3000
//parse application/json
app.use(express.json())
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// habilitar la carpeta publica para ser accedida

app.use(require('./routes/routes'))

app.listen(port, () => {
  console.log(`Entrar a: http://localhost:${port}`)
})

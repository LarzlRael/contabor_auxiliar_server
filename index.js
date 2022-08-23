const express = require('express')
const app = express()
const {
  Builder,
  Browser,
  By,
  Key,
  until,
  sendKeys,
} = require('selenium-webdriver')

var webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

/* chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build()) */

const port = process.env.PORT || 3000
//parse application/json
app.use(express.json())
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// habilitar la carpeta publica para ser accedida
app.get('/', (req, res) => {
  res.send('Hola mundo')
})
app.get('/revisarNit/:nit', async (req, res) => {
  const { nit } = req.params
  let driver = new webdriver.Builder().forBrowser('chrome').build()

  try {
    await driver.get(
      'http://pbdw.impuestos.gob.bo:8080/gob.sin.padron.web/#/verificar/estadoContribuyente',
    )
    const input = await driver
      .findElement(
        By.xpath('//*[@id="frmLogin"]/fieldset/section/div/label[2]/input'),
      )
      .sendKeys(nit)
    /* await driver.wait(until.titleIs('webdriver - Google Search'), 1000) */
    const sendButton = await driver.findElement(
      By.xpath('//*[@id="frmLogin"]/fieldset/div/button'),
    )
    console.log(sendButton)
    await sendButton.click()
    const res = await driver.findElement(By.xpath('//*[@id="toast-container"]'))
    console.log(res)
    /* setTimeout(async () => {}, 5000) */
    /* res.send(await driver.getPageSource()) */
    
  } finally {
    /* await driver.quit() */
  }
  /* return res.send(req.params.nit) */
})

app.listen(port, () => {
  console.log(`Entrar a: http://localhost:${port}`)
})

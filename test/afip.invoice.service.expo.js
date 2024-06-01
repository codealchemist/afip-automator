const AMOUNT = process.env.AMOUNT
const SELL_POINT_OPTION = process.env.SELL_POINT_OPTION
const COUNTRY_OPTION = process.env.COUNTRY_OPTION
const COUNTRY_ID = process.env.COUNTRY_ID
const COMPANY_ID = process.env.COMPANY_ID
const COMPANY_NAME = process.env.COMPANY_NAME
const COMPANY_ADDRESS = process.env.COMPANY_ADDRESS
const COMPANY_EMAIL = process.env.COMPANY_EMAIL
const DESCRIPTION = process.env.DESCRIPTION
const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD

describe('afip.factura.bert', function () {
  it('tests afip.factura.bert', function (browser) {
    browser.window.setRect({ width: 1600, height: 983 })

    browser
      .navigateTo('https://afip.gob.ar/landing/default.asp')
      .click('#cajaClaveFiscal > div:nth-of-type(1) span')
      .window.getAllHandles(result => {
        const handle = result.value[1]
        browser.window.switchTo(handle)
      })
      // .click('#F1\\:username')
      .setValue('#F1\\:username', USERNAME)
      .click('#F1\\:btnSiguiente')
      // .click('#F1\\:password')
      .setValue('#F1\\:password', PASSWORD)
      .click('#F1\\:btnIngresar')
      .pause(1000)
      .click('#buscadorInput')
      .setValue('#buscadorInput', 'monotributo')
      .pause(1000)
      .click('#rbt-menu-item-0 > a')
      .pause(1000)
      .window.getAllHandles(result => {
        const handle = result.value[2]
        console.log('HANDLES', result.value)
        browser.window.switchTo(handle)
      })
      // .pause(30 * 1000)
      .waitForElementVisible('#menuLateral > li:nth-of-type(3) > a', 3000)
      .click('#menuLateral > li:nth-of-type(3) > a')
      .click('#divRight > div:nth-of-type(1) button.btn-success')
      .pause(1000)
      .window.getAllHandles(result => {
        const handle = result.value[3]
        console.log('HANDLES', result.value)
        browser.window.switchTo(handle)
      })
      .click("input[type='button']")
      .click('tr:nth-of-type(1) span.ui-button-text')
      .pause(1000)
      .click('#puntodeventa')
      .pause(500)
      .click(`#puntodeventa option[value="${SELL_POINT_OPTION}"]`)
      .click('body')
      .click('form > input:nth-of-type(2)')
      .pause(1000)
      .click('#idconcepto')
      .click(`#idconcepto option[value="2"]`)
      .pause(1000)
      // .click('#actiAsociadaId')
      .setValue('#actiAsociadaId', '620100')
      .click('body')
      .click('form > input:nth-of-type(2)')
      .pause(1000)
      .click('#destino')
      .pause(1000)
      .click(`#destino option[value="${COUNTRY_OPTION}"]`)
      .pause(500)
      // .click('#nrodocreceptor')
      .pause(1000)
      .setValue('#nrodocreceptor', COUNTRY_ID)
      // .click('#nrodocextranjeroreceptor')
      .setValue('#nrodocextranjeroreceptor', COMPANY_ID)
      // .click('#razonsocialreceptor')
      .setValue('#razonsocialreceptor', COMPANY_NAME)
      // .click('#domicilioreceptor')
      .setValue('#domicilioreceptor', COMPANY_ADDRESS)
      // .click('#email')
      .setValue('#email', COMPANY_EMAIL)
      // .click('#descripcionformadepago')
      .setValue('#descripcionformadepago', 'Criptomoneda')
      .click('form > input:nth-of-type(2)')
      .pause(1000)
      // .click('#detalle_descripcion1')
      .setValue('#detalle_descripcion1', DESCRIPTION)
      // .click('#detalle_medida1')
      .setValue('#detalle_medida1', '7')
      // .click('#detalle_precio1')
      // .setValue('#detalle_precio1', '1')
      // .executeAsyncScript(done => {
      //   const amount = prompt('AR$?')
      //   document.querySelector('#detalle_precio1').value = amount
      //   done()
      // })
      .setValue('#detalle_precio1', AMOUNT)
      .click('body')
      .pause(1000)
      // .pause(5000)
      .click('#contenido')
      .pause(1000)
      .click('form > input:nth-of-type(2)')
      .pause(2 * 60 * 1000)
      .end()
  })
})

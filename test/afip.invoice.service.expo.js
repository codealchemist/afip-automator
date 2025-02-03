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
      .pause(1000)
      .setValue('#F1\\:username', USERNAME)
      .click('#F1\\:btnSiguiente')
      .setValue('#F1\\:password', PASSWORD)
      .click('#F1\\:btnIngresar')
      .waitForElementVisible('#cabeceraAFIP', 15000)
      .waitForElementVisible('#buscadorInput', 15000)
      .click('#buscadorInput')
      .setValue('#buscadorInput', 'monotributo')
      .click('#rbt-menu-item-0 > a')
      .pause(2000)
      .window.getAllHandles(result => {
        const handle = result.value[2]
        console.log('HANDLES', result.value)
        browser.window.switchTo(handle)
      })
      .pause(3000)
      .waitForElementVisible('#menuLateral > li:nth-of-type(3) > a', 15000)
      .click('#menuLateral > li:nth-of-type(3) > a')
      .click('#divRight > div:nth-of-type(1) button.btn-success')
      .pause(1500)
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
      .setValue('#actiAsociadaId', '620100')
      .click('body')
      .click('form > input:nth-of-type(2)')
      .pause(1000)
      .click('#destino')
      .pause(1000)
      .click(`#destino option[value="${COUNTRY_OPTION}"]`)
      .pause(2000)
      .setValue('#nrodocreceptor', COUNTRY_ID)
      .setValue('#nrodocextranjeroreceptor', COMPANY_ID)
      .pause(500)
      .setValue('#razonsocialreceptor', COMPANY_NAME)
      .setValue('#domicilioreceptor', COMPANY_ADDRESS)
      .setValue('#email', COMPANY_EMAIL)
      .setValue('#descripcionformadepago', 'Criptomoneda')
      .click('form > input:nth-of-type(2)')
      .pause(1000)
      .setValue('#detalle_descripcion1', DESCRIPTION)
      .setValue('#detalle_medida1', '7')
      .setValue('#detalle_precio1', AMOUNT)
      .click('body')
      .pause(1000)
      .click('#contenido')
      .pause(1000)
      .click('form > input:nth-of-type(2)')
      .pause(2 * 60 * 1000)
      .end()
  })
})

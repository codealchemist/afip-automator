const AMOUNT = process.env.AMOUNT

describe('afip.factura.bert', function () {
  it('tests afip.factura.bert', function (browser) {
    browser
      .windowRect({ width: 1600, height: 983 })
      .navigateTo('https://google.com')
      .click('textarea')
      .setValue('textarea', AMOUNT)
      .pause(30 * 1000)
      .end()
  })
})

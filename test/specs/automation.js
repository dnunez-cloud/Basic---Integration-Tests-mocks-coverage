describe ('Google Search for wikipedia', () => {
  beforeAll('open browser', () => {
    return browser.url('https://google.com');
  });

  it('can find search results', () => {
    $('[name="q"]').setValue('wikipedia');
    browser.keys("\uE007");
    $('#rso > div:nth-child(1) > div:nth-child(1) > div > div > div.yuRUbf > a > h3').click();
    expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada')
  });
});
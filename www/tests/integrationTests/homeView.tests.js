
describe('integration test of home view functionality', function() {
  it('should have a login text', function() {
    browser.get('http://localhost:8100/#/');


    var title = element(by.className('title'));
    expect(title.getText()).toContain('Docsys');
  });
});


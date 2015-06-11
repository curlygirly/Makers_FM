describe('User can login', function() {

  beforeEach(function () {
    browser.get('http://localhost:8080');
  });

  it('has the Makers FM title', function () {
    expect(browser.getTitle()).toEqual('Makers FM');
  });

  xit('with correct details', function() {

  });
});
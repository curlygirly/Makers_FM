describe('User can login', function() {

  beforeEach(function () {
    browser.get('http://localhost:8080');
  });

  it('has the Makers FM title', function () {
    expect(browser.getTitle()).toEqual('Makers FM');
  });

  it('has a link to the spotify login form', function () {
    var login = element(by.id('login'))
    expect(login.getText()).toEqual('Log in with Spotify')
  })

  it('with correct email and password', function() {

  });
});
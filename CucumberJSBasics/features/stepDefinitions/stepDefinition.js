var {Given, When, Then} = require('cucumber')


Given(/^user navigates to Facebook website$/, function () {
   return console.log('@Given - user navigates to Facebook website');
  });

  When(/^user validates the homepage title$/, function () {
    return console.log('@When - user validates the homepage title');
  });

  Then(/^user entered "([^"]*)" username$/, function (username) {
    return console.log('@Then - user entered '+username+' username');
  });

  Then(/^user entered "([^"]*)" password$/, function (password) {
    return console.log('@Then - user entered '+password+' password');
  });

  Then(/^user should "([^"]*)" successfully logged in$/, function (loginType) {
    return console.log('@Then - user should '+loginType+' successfully logged in');
  });
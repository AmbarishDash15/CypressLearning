var {Given, When, Then, Before, After, BeforeAll, AfterAll} = require('cucumber')


Then(/^user entered "([^"]*)" username and "([^"]*)" password$/, function (uname, pword) {
    
    return console.log('User enters',uname,'username and',pword,'password');
  });

  Then(/^user login is "([^"]*)"$/, (loginstatus) => {
    return console.log('User login is',loginstatus)
  });

  Then(/^user enters countryname and postcode$/,(table) => {
    var logindata = table.hashes()[0]
    return console.log('User enters countryname and postcode as',logindata["country"], 'and', logindata["code"])
  })

  Before("@prod",()=>{
    console.log("Inside Before")
  })
  After(()=>{
    console.log("Inside After")
  })
  BeforeAll(()=>{
    console.log("Inside BeforeAll")
  })
  AfterAll(()=>{
    console.log("Inside AfterAll")
  })


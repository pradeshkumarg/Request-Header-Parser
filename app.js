// init
const express = require('express');
var app = module.exports = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Used for easy parsing of user agent for response
const userAgent = require("express-useragent");


app.use(bodyParser.json());
app.use(cors());
app.use(userAgent.express());


var api = "/api/whoami"

app.get(api, (req, res, next) => {

  var language = req.acceptsLanguages();
  // var software = req.get('User-Agent');
  var software = "OS:" + req.useragent.os + ", Browser:" + req.useragent.browser;
  // var software = req.headers('user-agent');
  var ipaddress = req.ip;



  return res.json({
    'ipaddress': ipaddress,
    'language': language[0],
    'software': software
  });

});







const port  = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Everything works fine !!");
})

var express = require('express');
var app = express();
var useragent = require('express-useragent');
app.use(useragent.express());

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
//get IP,language, and operating system.
var language = req.acceptsLanguages();
var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
var ipadress = req.ip;
res.json({'ip':ipadress,'language':language[0],'software':software});
});
app.listen(port);
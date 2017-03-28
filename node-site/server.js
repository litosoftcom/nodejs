
////////////// Express

var express         = require('express');
var expressLayouts  = require('express-ejs-layouts');
var bodyParser      = require('body-parser');
var app             = express();
var port            = 8090;


//Use EJS and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded({extended:true}));


var router = require('./app/routes.js');
app.use('/', router);

//setting static files (css, images, ...)
app.use(express.static(__dirname + '/public'));


//start the server
app.listen(port, function(){
    console.log('App started on port 8090');
});

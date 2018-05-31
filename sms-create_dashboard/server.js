require('dotenv').load();

// Server
//------------------------------------------------------------------
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/assets'));

// Body Parser
//------------------------------------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handebars
//------------------------------------------------------------------
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir: __dirname + '/views/' }));
app.set('view engine', 'handlebars');

// View
//------------------------------------------------------------------
const html = require('./routes/routes.js');
const sms = require('./routes/sms.js');
const dashboard = require('./routes/dashboard.js');
app.use('/', html);
app.use('/sms', sms);
app.use('/api', dashboard);

//Listening
//------------------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on Port: " + port);

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
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// View
//------------------------------------------------------------------
const html = require('./routes/routes.js');
const hangup = require('./routes/hangup.js');
// const message = require('./routes/message.js');
app.use('/', html);
app.use('/hangup', twilion.first);
app.use('/message', twilion.second);
// app.use('/message', message);

//Listening
//------------------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on Port: " + port);

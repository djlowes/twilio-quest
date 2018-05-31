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

//Handebars
//------------------------------------------------------------------
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir: __dirname + '/views/' }));
app.set('view engine', 'handlebars');

// Twilio
//------------------------------------------------------------------
const VoiceResponse = require('twilio').twiml.VoiceResponse;

// View
//------------------------------------------------------------------
const html = require('./routes/routes.js');
const conference = require('./routes/conference.js');
const participants = require('./routes/participants.js');
app.use('/', html);
app.use('/conference', conference);
app.use('/participants', participants);

//Listening
//------------------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on Port: " + port);

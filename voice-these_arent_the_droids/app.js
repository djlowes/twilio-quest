require('dotenv').load();

const express = require('express');
const http = require('http');
const app = express();
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

const twilioNUM = +15017250604;


app.post('/voice', (req, res) => {

const response = new VoiceResponse();
const dial = response.dial();

if (req.body.From == twilioNUM) {
    dial.conference('My-room', {
      maxParticipants: 2,
      startConferenceOnEnter: true,
      endConferenceOnExit: true,
    });
  } else {
    response.reject();
  }

console.log(req.body);
console.log(response.toString());

res.writeHead(200, {'Content-Type': 'text/xml'});
res.end(response.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});

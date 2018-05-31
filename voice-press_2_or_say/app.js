require('dotenv').load();

const express = require('express');
const app = express();
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));


app.post('/gather', (req, res) => {
const twiml = new VoiceResponse();
const entered = req.body.Digits;
const gather = twiml.gather({
  input: 'speech dtmf',
  timeout: 5,
  numDigits: 1,
});
if (entered == null) {
  gather.say("Please press 1 for sales. Please press 2 for support. Please press 3 to hear these options again");
}
if (entered == 1) {
  console.log("YOU HAVE HIT 1")
  gather.say("I am connecting you to sales");
  twiml.redirect({ method: 'GET'}, "/sales")
}
if (entered == 2) {
  console.log("YOU HAVE HIT 2")
  gather.say("I am connecting you to support");
  twiml.redirect({ method: 'GET'}, "/support")
}
if (entered == 3) {
  console.log("YOU HAVE HIT 2")
  gather.say("Please listen to your options again");
  twiml.redirect('/gather')
}
// Render the response as XML in reply to the webhook request
res.type('text/xml');
res.send(twiml.toString());
// console.log(twiml.toString());
});


app.get('/sales', (req, res) => {
const twiml = new VoiceResponse();
twiml.say("Connecting you now");
const dial = twiml.dial();
dial.number('415-694-1679');
// Render the response as XML in reply to the webhook request
res.type('text/xml');
res.send(twiml.toString());
console.log(twiml.toString());
});

// Create an HTTP server and listen for requests on port 3000
console.log('Twilio Client app HTTP server running at http://127.0.0.1:3000');
app.listen(3000);

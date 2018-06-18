require('dotenv').load();

const express = require('express');
const app = express();
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const bodyParser = require("body-parser");
// const twilio = require('twilio')
// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.use(bodyParser.urlencoded({
  extended: false
}));


app.post('/queue', (req, res) => {
  const twiml = new VoiceResponse();
  const entered = req.body.Digits;
  const dial = twiml.dial;

  const gather = twiml.gather({
    input: 'speech dtmf',
    timeout: 5,
    numDigits: 1,
  });
  if (entered == null) {
    gather.say("Please press 1 for sales, or say 'Sales'. Please press 2 for support, or say 'support  '. Please press 3 to hear these options again");
  }
  if (entered == 1) {
    console.log("YOU HAVE HIT 1");
    console.log(req);
    gather.say("I am connecting you to sales");
    // twiml bin = https://handler.twilio.com/twiml/EH15c94d0a75e9c1dfcf5b18e36ea023a4
    twiml.redirect({
      method: 'GET'
    }, "https://handler.twilio.com/twiml/EH15c94d0a75e9c1dfcf5b18e36ea023a4");
  }

  // if (entered == 2) {
  //   console.log("YOU HAVE HIT 2");
  //   gather.say("I am connecting you to support");
  //   twiml.redirect({
  //     method: 'GET'
  //   }, "/support");
  // }
  // if (entered == 3) {
  //   console.log("YOU HAVE HIT 2");
  //   gather.say("Please listen to your options again");
  //   twiml.redirect('/gather');
  // }

  res.type('text/xml');
  res.send(twiml.toString());
  console.log(twiml.toString());
});



// Create an HTTP server and listen for requests on port 3000
console.log('Twilio Client app HTTP server running at http://127.0.0.1:3000');
app.listen(3000);

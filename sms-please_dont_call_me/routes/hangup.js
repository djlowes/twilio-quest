const express = require('express');
const router = express.Router();
let userNumber =
counter = 0; //To display call count - can push to website


router.post('/', (req, res) => {
  const VoiceResponse = require('twilio').twiml.VoiceResponse;
  const twiml = new VoiceResponse();
  userNumber = req.body.From;
  if (userNumber) {
    counter++;
  }

  twiml.say({
      voice: 'woman',
      language: 'en-AU',
    },
    "Sorry mate, I don't take calls"
  );
  twiml.hangup();

  // Now send a message to the rejected caller
  const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  client.messages
    .create({
      body: "Look mate, I don't like phone calls. If you want to get in contact with me, email me here: dont-actually-email@me.com",
      from: process.env.TWILIO_NUMBER,
      to: userNumber
    })
    .then(message => console.log(message.sid))
    .done();

    // Now send a message to the user, telling them about the call
    client.messages
      .create({
        body: "Another scumbag called you, this is their number - " + userNumber,
        from: process.env.TWILIO_NUMBER,
        to: process.env.MY_NUMBER
      })
      .then(message => console.log(message.sid))
      .done();

  // What's the result?
  console.log(req.body.From);
  console.log(counter);
  res.type('text/xml');
  res.send(twiml.toString());
});


module.exports.router = router;
module.exports.userNumber = userNumber; // Do not need to export this variable now after realizing you can hit both voice and message constructors in one API call

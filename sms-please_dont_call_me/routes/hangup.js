const express = require('express');
const router = express.Router();
let userNumber =

twilion = {
  first: router.post('/', (req, res) => {
    const VoiceResponse = require('twilio').twiml.VoiceResponse;
    const twiml = new VoiceResponse();
    userNumber = req.body.From

    twiml.say(
    {
      voice: 'woman',
      language: 'en-AU',
    },
    "Sorry mate, I don't take calls"
  );
  twiml.hangup();
    console.log(req.body.From);
    res.type('text/xml');
    res.send(twiml.toString());
    return this.second;
  }),
  second: router.post('/', (req, res) => {
    const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    console.log("Message executed");
    client.messages
      .create({
         body: 'Did this work?',
         from: process.env.TWILIO_NUMBER,
         to: userNumber
       })
      .then(message => console.log(message.sid))
      .done();
    console.log(res);
  })
}
Object.values(twilion.second)

module.exports = twilion;

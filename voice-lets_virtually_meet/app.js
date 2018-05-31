require('dotenv').load();

const VoiceResponse = require('twilio').twiml.VoiceResponse;

const response = new VoiceResponse();
const dial = response.dial();
dial.number(process.env.MY_NUMBER);
dial.conference('Room 1234');

console.log(response.toString());

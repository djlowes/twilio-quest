const VoiceResponse = require('twilio').twiml.VoiceResponse;

const response = new VoiceResponse();
const dial = response.dial();
dial.number(process.env.TWILIO_NUMBER);

console.log(response.toString());

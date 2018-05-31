const express = require("express");
const router = express.Router();
const path = require('path');

const twilio = require('twilio');
const VoiceResponse = twilio.twiml.VoiceResponse;

router.post('/', (req, res) => {
  const conf = "djlowes";
  const response = new VoiceResponse();
  const dial = response.dial();
  dial.conference(conf);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(response.toString());
});


module.exports = router;

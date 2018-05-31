const express = require("express");
const router = express.Router();
const path = require('path');
const request = require("request");
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.post('/', function(req, res) {
  const conf = "djlowes";
  client.conferences.list({ friendlyName: conf }, function(err, data) {
    const conferenceSid = data[0].sid
    client.conferences(conferenceSid).participants.list(function(err, list) {
      client.calls(list[0].callSid).update({ method: 'GET', url: 'https://www.twilio.com/quest/Z6CVAXG1SQBV5VH.mp3' })
      .then(call => console.log(call))
      .catch((error) => {
        console.log(error);
        response.status(500).send(error);
        });
    });
  });
});

module.exports = router;


// // NOTE:
/*
      In the docs: https://www.twilio.com/docs/voice/tutorials/how-to-modify-calls-in-progress-node-js the update method is a POST Request, which did not work for me, however a GET request worked.
*/

const express = require('express');
const app = express();
const hangup = require('./hangup.js');

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports = app.post('/', (req, res) => {

  console.log(hangup.userNumber)

  client.messages
    .create({
       body: 'Did this work?',
       from: process.env.TWILIO_NUMBER,
       to: hangup.userNumber
     })
    .then(message => console.log(message.sid))
    .done();

});

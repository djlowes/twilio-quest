const express = require('express');
const app = express();

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports = app.get('/dashboard', (req, res) => {

  client.usage.records.list((err, data) => {
    res.json(data);
  });

});

require('dotenv').load();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         from: process.env.TWILIO_NUMBER,
         to: process.env.MY_NUMBER
       })
      .then(call => console.log(call.sid))
      .done();

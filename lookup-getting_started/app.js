require('dotenv').load();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.lookups.phoneNumbers('+4916793929939')
              .fetch({type: 'carrier'})
              .then(phone_number => console.log(phone_number.callerName))
              .done();

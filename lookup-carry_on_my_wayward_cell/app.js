require('dotenv').load();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.lookups.phoneNumbers('+61481073056')
              .fetch({type: 'carrier'})
              .then(Name => console.log(Name.carrier.name))
              .done();

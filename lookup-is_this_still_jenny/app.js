require('dotenv').load();

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.lookups.phoneNumbers('+14156941679')
              .fetch({addOns: 'whitepages_pro_caller_id'})
              .then(phone_number => console.log(phone_number.addOns.results.whitepages_pro_caller_id.result.belongs_to))
              .done();

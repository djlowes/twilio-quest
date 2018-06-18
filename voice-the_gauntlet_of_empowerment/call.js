require('dotenv').load();

const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

var from = process.env.MY_NUMBER;
var to = process.argv[2]; // take the passed in command-line argument
var url = 'https://handler.twilio.com/twiml/EH711e5398c448e875ab8a4822523de4c2';

if (!to) {
  throw new TypeError('Please pass in a phone number to call to this script.')
}

client.calls.create({
  from: from,
  to: to,
  url: url
}).then(function () {
  console.log('Your phone should be ringing');
}).catch(function (err) {
  console.error(err.message);
});


// Twiml bin = https://handler.twilio.com/twiml/EH711e5398c448e875ab8a4822523de4c2

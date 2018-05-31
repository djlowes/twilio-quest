const twilio = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const body = 'Test Message';
const number = process.env.MY_NUMBER;

twilio.messages
  .create({
    to: number,
    from: process.env.TWILIO_MESSAGING_SERVICE_SID,
    body: body
  })
  .then(message => {
    console.log(message.sid);
    console.log(message);
  })
  .catch(err => console.error(err));

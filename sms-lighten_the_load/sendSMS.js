const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');

let env = dotenv.config({})
if (env.error) throw env.error;
env = dotenvParseVariables(env.parsed);
console.log(env);

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

for (let i=1; i<11; i++) {

client.messages
  .create({
     body: 'This is message ' + i,
     from: process.env.TWILIO_NUMBER,
     to: process.env.MY_NUMBER
   })
  .then(message => console.log(message.sid))
  .done();

}

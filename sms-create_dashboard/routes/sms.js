const express = require('express');
const router = express.Router();

const MessagingResponse = require('twilio').twiml.MessagingResponse;

module.exports = router.post('/', (req, res) => {

  const twiml = new MessagingResponse();

  let messageRemainder = req.body.Body.split(' ').slice(1).join(' '); // all words after 1st
  let messageFirst = req.body.Body.split(' '); // to get index [0]


  if (messageFirst[0] == "add") {
    list.push(messageRemainder);
    // twiml.message(list);
  }

  if (messageFirst[0] == "list") {
    for (let i=0; i<list.length; i++) {
      console.log(i+1 + '. ' + list[i]);
      twiml.message(i+1 + '. ' + list[i]);
    }
  }

  if (messageFirst[0] == "remove") {
    list.splice(messageRemainder+1, 1)
  }

  console.log(list);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());

});

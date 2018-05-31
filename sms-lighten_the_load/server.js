const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const list = [];

app.post('/sms', (req, res) => {

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

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});

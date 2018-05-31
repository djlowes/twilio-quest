const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    const message = twiml.message();

    message.body('Hi ' + req.body.From + " this is my favorite gif");
    message.media('https://78.media.tumblr.com/tumblr_lpzrwpjDFq1r17150o1_r1_500.gif');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});

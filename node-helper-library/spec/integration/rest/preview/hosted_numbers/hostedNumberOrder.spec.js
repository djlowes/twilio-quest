'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */
var serialize = require(
    '../../../../../lib/base/serialize');  /* jshint ignore:line */


var client;
var holodeck;

describe('HostedNumberOrder', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.hosted_numbers.hostedNumberOrders('HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/HostedNumbers/HostedNumberOrders/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address_sid': 'AD11111111111111111111111111111111',
          'call_delay': 15,
          'capabilities': {
              'sms': true,
              'voice': false
          },
          'cc_emails': [
              'aaa@twilio.com',
              'bbb@twilio.com'
          ],
          'date_created': '2017-03-28T20:06:39Z',
          'date_updated': '2017-03-28T20:06:39Z',
          'email': 'test@twilio.com',
          'extension': '5105',
          'failure_reason': '',
          'friendly_name': 'friendly_name',
          'incoming_phone_number_sid': 'PN11111111111111111111111111111111',
          'phone_number': '+14153608311',
          'sid': 'HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'signing_document_sid': 'PX11111111111111111111111111111111',
          'status': 'received',
          'unique_name': 'foobar',
          'url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders/HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'verification_attempts': 0,
          'verification_call_sids': [
              'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
          ],
          'verification_code': '8794',
          'verification_document_sid': null,
          'verification_type': 'phone-call'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.hosted_numbers.hostedNumberOrders('HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.hosted_numbers.hostedNumberOrders('HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/HostedNumbers/HostedNumberOrders/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.preview.hosted_numbers.hostedNumberOrders('HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.hosted_numbers.hostedNumberOrders('HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/HostedNumbers/HostedNumberOrders/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address_sid': 'AD11111111111111111111111111111111',
          'call_delay': 15,
          'capabilities': {
              'sms': true,
              'voice': false
          },
          'cc_emails': [
              'test1@twilio.com',
              'test2@twilio.com'
          ],
          'date_created': '2017-03-28T20:06:39Z',
          'date_updated': '2017-03-28T20:06:39Z',
          'email': 'test+hosted@twilio.com',
          'extension': '1234',
          'failure_reason': '',
          'friendly_name': 'new friendly name',
          'incoming_phone_number_sid': 'PN11111111111111111111111111111111',
          'phone_number': '+14153608311',
          'sid': 'HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'signing_document_sid': 'PX11111111111111111111111111111111',
          'status': 'pending-loa',
          'unique_name': 'new unique name',
          'url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders/HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'verification_attempts': 1,
          'verification_call_sids': [
              'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
          ],
          'verification_code': '8794',
          'verification_document_sid': null,
          'verification_type': 'phone-call'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.hosted_numbers.hostedNumberOrders('HRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.hosted_numbers.hostedNumberOrders.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders?PageSize=50&Page=0',
              'key': 'items',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders?PageSize=50&Page=0'
          },
          'items': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.hosted_numbers.hostedNumberOrders.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders?PageSize=50&Page=0',
              'key': 'items',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders?PageSize=50&Page=0'
          },
          'items': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address_sid': 'AD11111111111111111111111111111111',
                  'call_delay': 15,
                  'capabilities': {
                      'sms': true,
                      'voice': false
                  },
                  'cc_emails': [
                      'aaa@twilio.com',
                      'bbb@twilio.com'
                  ],
                  'date_created': '2017-03-28T20:06:39Z',
                  'date_updated': '2017-03-28T20:06:39Z',
                  'email': 'test@twilio.com',
                  'extension': '1234',
                  'failure_reason': '',
                  'friendly_name': 'friendly_name',
                  'incoming_phone_number_sid': 'PN11111111111111111111111111111111',
                  'phone_number': '+14153608311',
                  'sid': 'HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'signing_document_sid': 'PX11111111111111111111111111111111',
                  'status': 'received',
                  'unique_name': 'foobar',
                  'url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders/HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'verification_attempts': 0,
                  'verification_call_sids': [
                      'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
                  ],
                  'verification_code': '8794',
                  'verification_document_sid': null,
                  'verification_type': 'phone-call'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.hosted_numbers.hostedNumberOrders.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {phoneNumber: '+15017122661', smsCapability: true};
      var promise = client.preview.hosted_numbers.hostedNumberOrders.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders';

      var values = {PhoneNumber: '+15017122661', SmsCapability: serialize.bool(true), };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address_sid': 'AD11111111111111111111111111111111',
          'call_delay': 0,
          'capabilities': {
              'sms': true,
              'voice': false
          },
          'cc_emails': [],
          'date_created': '2017-03-28T20:06:39Z',
          'date_updated': '2017-03-28T20:06:39Z',
          'email': 'test@twilio.com',
          'extension': null,
          'failure_reason': '',
          'friendly_name': null,
          'incoming_phone_number_sid': 'PN11111111111111111111111111111111',
          'phone_number': '+14153608311',
          'sid': 'HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'signing_document_sid': null,
          'status': 'received',
          'unique_name': null,
          'url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders/HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'verification_attempts': 0,
          'verification_call_sids': null,
          'verification_code': null,
          'verification_document_sid': null,
          'verification_type': 'phone-call'
      });

      holodeck.mock(new Response(201, body));

      var opts = {phoneNumber: '+15017122661', smsCapability: true};
      var promise = client.preview.hosted_numbers.hostedNumberOrders.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create_without_optional_loa_fields response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address_sid': null,
          'call_delay': 0,
          'capabilities': {
              'sms': true,
              'voice': false
          },
          'cc_emails': [],
          'date_created': '2017-03-28T20:06:39Z',
          'date_updated': '2017-03-28T20:06:39Z',
          'email': null,
          'extension': null,
          'failure_reason': '',
          'friendly_name': null,
          'incoming_phone_number_sid': 'PN11111111111111111111111111111111',
          'phone_number': '+14153608311',
          'sid': 'HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'signing_document_sid': null,
          'status': 'received',
          'unique_name': null,
          'url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders/HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'verification_attempts': 0,
          'verification_call_sids': null,
          'verification_code': null,
          'verification_document_sid': null,
          'verification_type': 'phone-call'
      });

      holodeck.mock(new Response(201, body));

      var opts = {phoneNumber: '+15017122661', smsCapability: true};
      var promise = client.preview.hosted_numbers.hostedNumberOrders.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create_with_phone_bill_verification response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address_sid': null,
          'call_delay': 0,
          'capabilities': {
              'sms': true,
              'voice': false
          },
          'cc_emails': [],
          'date_created': '2017-03-28T20:06:39Z',
          'date_updated': '2017-03-28T20:06:39Z',
          'email': null,
          'extension': null,
          'failure_reason': '',
          'friendly_name': null,
          'incoming_phone_number_sid': 'PN11111111111111111111111111111111',
          'phone_number': '+14153608311',
          'sid': 'HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'signing_document_sid': null,
          'status': 'received',
          'unique_name': null,
          'url': 'https://preview.twilio.com/HostedNumbers/HostedNumberOrders/HRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'verification_attempts': 0,
          'verification_call_sids': null,
          'verification_code': null,
          'verification_document_sid': 'RIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'verification_type': 'phone-bill'
      });

      holodeck.mock(new Response(201, body));

      var opts = {phoneNumber: '+15017122661', smsCapability: true};
      var promise = client.preview.hosted_numbers.hostedNumberOrders.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

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
var CredentialList = require('./v1/credential').CredentialList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Accounts
 *
 * @constructor Twilio.Accounts.V1
 *
 * @property {Twilio.Accounts.V1.CredentialList} credentials - credentials resource
 *
 * @param {Twilio.Accounts} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._credentials = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'credentials', {
  get: function() {
    this._credentials = this._credentials || new CredentialList(this);
    return this._credentials;
  }
});

module.exports = V1;
'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var StreamMessageList;
var StreamMessagePage;
var StreamMessageInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Sync.V1.ServiceContext.SyncStreamContext.StreamMessageList
 * @description Initialize the StreamMessageList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Sync.V1} version - Version of the resource
 * @param {string} serviceSid - Service Instance SID.
 * @param {string} streamSid - Stream SID.
 */
/* jshint ignore:end */
StreamMessageList = function StreamMessageList(version, serviceSid, streamSid) {
  /* jshint ignore:start */
  /**
   * @function streamMessages
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Sync.V1.ServiceContext.SyncStreamContext.StreamMessageContext}
   */
  /* jshint ignore:end */
  function StreamMessageListInstance(sid) {
    return StreamMessageListInstance.get(sid);
  }

  StreamMessageListInstance._version = version;
  // Path Solution
  StreamMessageListInstance._solution = {serviceSid: serviceSid, streamSid: streamSid};
  StreamMessageListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Streams/<%= streamSid %>/Messages' // jshint ignore:line
  )(StreamMessageListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a StreamMessageInstance
   *
   * @function create
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamContext.StreamMessageList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.serviceSid - The service_sid
   * @param {string} opts.streamSid - The stream_sid
   * @param {string} opts.data - Stream Message body.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed StreamMessageInstance
   */
  /* jshint ignore:end */
  StreamMessageListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.data)) {
      throw new Error('Required parameter "opts.data" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'Data': serialize.object(_.get(opts, 'data'))});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new StreamMessageInstance(this._version, payload));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  return StreamMessageListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Sync.V1.ServiceContext.SyncStreamContext.StreamMessagePage
 * @augments Page
 * @description Initialize the StreamMessagePage
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param {Twilio.Sync.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns StreamMessagePage
 */
/* jshint ignore:end */
StreamMessagePage = function StreamMessagePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(StreamMessagePage.prototype, Page.prototype);
StreamMessagePage.prototype.constructor = StreamMessagePage;

/* jshint ignore:start */
/**
 * Build an instance of StreamMessageInstance
 *
 * @function getInstance
 * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamContext.StreamMessagePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns StreamMessageInstance
 */
/* jshint ignore:end */
StreamMessagePage.prototype.getInstance = function getInstance(payload) {
  return new StreamMessageInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.streamSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Sync.V1.ServiceContext.SyncStreamContext.StreamMessageInstance
 * @description Initialize the StreamMessageContext
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @property {string} sid - Stream Message SID.
 * @property {string} data - Stream Message body.
 *
 * @param {Twilio.Sync.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
StreamMessageInstance = function StreamMessageInstance(version, payload,
                                                        serviceSid, streamSid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.data = payload.data; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, streamSid: streamSid, };
};

/* jshint ignore:start */
/**
 * Produce a plain JSON object version of the StreamMessageInstance for serialization.
 * Removes any circular references in the object.
 *
 * @function toJSON
 * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamContext.StreamMessageInstance
 * @instance
 *
 * @returns Object
 */
/* jshint ignore:end */
StreamMessageInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

module.exports = {
  StreamMessageList: StreamMessageList,
  StreamMessagePage: StreamMessagePage,
  StreamMessageInstance: StreamMessageInstance
};

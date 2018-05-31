/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { CompositionListInstance } from './v1/composition';
import { RecordingListInstance } from './v1/recording';
import { RoomListInstance } from './v1/room';


/**
 * Initialize the V1 version of Video
 */
declare class V1 extends Version {
  /**
   * Initialize the V1 version of Video
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  readonly compositions: CompositionListInstance;
  readonly recordings: RecordingListInstance;
  readonly rooms: RoomListInstance;
}

export = V1;

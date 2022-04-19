//import moment, { Moment } from 'utils/object/moment';

import moment from "moment";

export const getTimestampedDocId = (date = moment().startOf('day')) =>
  date.utc(true).valueOf().toString();

export const clearTimezone = (moment: moment.Moment) => moment.utc(true);

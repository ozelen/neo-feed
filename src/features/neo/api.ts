import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import axios from 'axios';
import { Rxios } from 'rxios';
import { AxiosPromise } from 'axios';

export const API_KEY = 'SPboJP8XCDF9nlUzSqcqzh0Mq9sJuy6Hf27FuTFl';

export const API_HOST = 'https://api.nasa.gov';
export const NEO_FEED_URL = `${API_HOST}/neo/rest/v1/feed`;

export const startDate = new Date(2018, new Date().getMonth(), 1);
export const endDate = new Date(2018, new Date().getMonth(), 8);

const http = new Rxios({
  baseURL: NEO_FEED_URL
})

export const getUrl = (from=1, to=from+7) =>
  `/?api_key=${API_KEY}&start_date=${getDate(from+1)}&end_date=${getDate(to)}`;

export const getDate = (offset) =>
  new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), limitLastDay(offset))).
    toISOString().substr(0, 10);

export const limitLastDay = offset =>
  offset > new Date().getUTCDate() ? new Date().getUTCDate() : offset;

export const getNEO = (from) =>
    http.get(getUrl(from)).
      retryWhen(err => err.delay(1000));

export const normalize = ({near_earth_objects}) => near_earth_objects;

export const getStartDay = i => i? i*7: 0;

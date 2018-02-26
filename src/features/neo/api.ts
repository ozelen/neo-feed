import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import axios from 'axios';
import { Rxios } from 'rxios';
import { AxiosPromise } from 'axios';
import {API_KEY, NEO_FEED_URL} from './neo.constants';

const http = new Rxios({
  baseURL: NEO_FEED_URL
});

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

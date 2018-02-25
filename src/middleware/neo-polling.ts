import { Observable } from 'rxjs';
import { Action } from 'redux';
import {ActionsObservable, createEpicMiddleware, Epic} from 'redux-observable';
import {START_POLLING, UPDATE_NEO} from '../constants/actions';
import {startPolling, updateNeo} from '../actions/neo'
import axios from 'axios';
import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';


const API_KEY = 'SPboJP8XCDF9nlUzSqcqzh0Mq9sJuy6Hf27FuTFl';

const API_HOST = 'https://api.nasa.gov';
const NEO_FEED_URL = `${API_HOST}/neo/rest/v1/feed`;

const startDate = new Date(2018, new Date().getMonth(), 1);
const endDate = new Date(2018, new Date().getMonth(), 8);

const getUrl = (from=1, to=from+7) =>
  `${NEO_FEED_URL}?api_key=${API_KEY}&start_date=${getDate(from)}&end_date=${getDate(to)}`;

const getDate = (offset) =>
  new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), limitLastDay(offset))).
    toISOString().substr(0, 10);

const limitLastDay = offset =>
  offset > new Date().getDate() ? new Date().getDate() : offset;

const getNEO = (from): Observable<INasaNeoResponse> =>
  ajax.getJSON<INasaNeoResponse>(getUrl(from)).
    retry(3);

const normalize = ({near_earth_objects}) => near_earth_objects;

const getStartDay = i => i? i*7: 1;

export const pollingEpic = (action$: ActionsObservable<Action>) =>
  action$.ofType(START_POLLING).
    flatMap(action =>
      Observable.interval(1000).
        map(getStartDay).
        takeWhile(day => day < new Date().getDate()).
        switchMap(getNEO).
        map(normalize).
        map(updateNeo));

export const pollingMiddleware = createEpicMiddleware(pollingEpic);

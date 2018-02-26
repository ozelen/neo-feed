import 'rxjs';
import { Observable } from 'rxjs';
import { Action } from 'redux';
import * as actions from './neo.actions';
import {getStartDay, getNEO, normalize} from './api';
import {ActionsObservable, combineEpics} from 'redux-observable';
import {POLLING_INTERVAL, SHOW_NEXT_INTERVAL} from './neo.constants';
let errors = 0;

export const pollingNeoApi = (action$: ActionsObservable<Action>) =>
  action$.ofType(actions.START_POLLING).
    flatMap(action =>
      Observable.interval(POLLING_INTERVAL).
        map(getStartDay).
        takeWhile(day => day < new Date().getDate()).
        flatMap(getNEO).
        map(normalize).
        map(actions.updateNeo));

export const showNeoDays = (action$: ActionsObservable<Action>) =>
  action$.ofType(actions.START_POLLING).
    flatMap(action =>
      Observable.interval(SHOW_NEXT_INTERVAL).
        map(actions.showNextNeoDay));

export const neoEpics = combineEpics<any>(showNeoDays, pollingNeoApi);

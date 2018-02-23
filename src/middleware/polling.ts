import {START_POLLING, UPDATE_NEO} from '../constants/actions';

export const polling = action$ =>
  action$.ofType(START_POLLING).
    do(() => console.log('POLLING!!!')).
    mapTo(UPDATE_NEO);

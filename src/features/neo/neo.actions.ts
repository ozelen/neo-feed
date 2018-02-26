import { createAction } from 'redux-actions';

export const START_POLLING = 'START_POLLING';
export const startPolling = createAction(START_POLLING);

export const UPDATE_NEO = 'UPDATE_NEO';
export const updateNeo = createAction<INeoLog>(UPDATE_NEO);

export const SHOW_NEXT_NEO = 'SHOW_NEXT_NEO';
export const showNextNeoDay = createAction<number>(SHOW_NEXT_NEO);

import { createAction } from 'redux-actions';
import {START_POLLING, UPDATE_NEO} from '../constants/actions';

export const startPolling = createAction(START_POLLING);
export const updateNeo = createAction<INeoLog>(UPDATE_NEO);

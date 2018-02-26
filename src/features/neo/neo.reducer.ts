import { handleActions } from 'redux-actions';
import * as actions from './neo.actions';
import { aggregate } from './aggregation';
import { by } from '../../utils';

const initialState: NeoStoreState = {
  log : {},
  aggregated: [],
  display: [],
  counter: 0
};

export const neoReducer = handleActions<NeoStoreState, any>({
  [actions.UPDATE_NEO]: (state, {payload}) => ({
    ...state,
    log: {...state.log, ...payload},
    aggregated: [
      ...state.aggregated,
      ...aggregate(payload).sort(by('date'))
    ]
  }),
  [actions.SHOW_NEXT_NEO]: (state, {payload}) => ({
    ...state,
    counter: payload,
    display: state.aggregated.filter((_, i) =>
      i >= 0 &&
      i >= loop(payload, state.aggregated.length) - 5 &&
      i <= loop(payload, state.aggregated.length)
    )
  })
}, initialState);

const loop = (x, l) =>
  x <= l ? x : x % l;

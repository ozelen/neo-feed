import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: NeoStoreState = {items: []};

export default handleActions<NeoStoreState, NeoItemData[]>({
  [Actions.UPDATE_NEO]: (state, {payload}) => {
    return {
      ...state,
      items: [...payload, ...state.items]
    }
  }
}, initialState);

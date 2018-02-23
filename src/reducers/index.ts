import { combineReducers, Reducer } from 'redux';
import neos from './neos';

export interface RootState {
  neos: NeoStoreState;
}

export default combineReducers<RootState>({
  neos
});

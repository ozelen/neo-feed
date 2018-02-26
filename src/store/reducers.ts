import { combineReducers, Reducer } from 'redux';
import { neoReducer as neos } from '../features';
import { RootState } from './state';

export default combineReducers<RootState>({
  neos
});

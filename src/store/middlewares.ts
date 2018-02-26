import {ActionsObservable, createEpicMiddleware, combineEpics} from 'redux-observable';
import {neoEpics} from '../features';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

export const middleware = createEpicMiddleware(neoEpics);

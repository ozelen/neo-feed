import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { middleware } from './middlewares';
import { RootState } from './state';
import rootReducer  from './reducers';
const { NODE_ENV } = process.env;

export function configureStore(initialState?: RootState) {
  const md = NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(middleware)) :
    applyMiddleware(middleware);

  const store = createStore(rootReducer, initialState, md) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

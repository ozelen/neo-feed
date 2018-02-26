import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { NeoList } from './features';
import { App } from './app';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <App>
    <Router history={history}>
      <Switch>
        <Route path="/" component={NeoList} />
      </Switch>
    </Router>
    </App>
  </Provider>,
  document.getElementById('root')
);

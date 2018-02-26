import * as React from 'react';
import * as style from './app.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export namespace App {
  export interface Props {
    /* empty */
  }

  export interface State {
    /* empty */
  }
}
export class App extends React.Component<App.Props, App.State> {

  render() {
    const { children } = this.props;
    return (
      <div className={style.normal}>
        {children}
      </div>
    );
  }
}

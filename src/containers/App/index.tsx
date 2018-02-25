import * as React from 'react';
import * as NeoActions from '../../actions/neo';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { MainSection } from '../../components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    neos: INeoItemData[];
    actions: typeof NeoActions;
  }

  export interface State {
    /* empty */
  }
}

@connect(
  state => ({ neos: state.neos}),
  dispatch => ({actions: bindActionCreators(NeoActions as any, dispatch)})
)

export class App extends React.Component<App.Props, App.State> {
  componentDidMount() {
    console.log('HELLO WORLD');
    this.props.actions.startPolling();
  }

  render() {
    const { children } = this.props;
    return (
      <div className={style.normal}>
        {children}
      </div>
    );
  }
}

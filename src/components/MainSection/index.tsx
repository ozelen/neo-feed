import * as React from 'react';
import * as TodoActions from '../../actions/neo';
import * as style from './style.css';
import { connect } from 'react-redux';

export namespace MainSection {
  export interface Props {
    neos: NeoItemData[];
    actions: typeof TodoActions;
  }

  export interface State {

  }
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {

  render() {
    return (
      <section className={style.main}>
      </section>
    );
  }
}

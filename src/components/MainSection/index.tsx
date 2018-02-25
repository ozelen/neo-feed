import * as React from 'react';
import * as NeoActions from '../../actions/neo';
import * as style from './style.css';
import { connect } from 'react-redux';
// import { }

export namespace MainSection {
  export interface Props {
    neos: INeoItemData[];
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

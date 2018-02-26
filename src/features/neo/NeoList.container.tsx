import * as React from 'react';
import { NeoDaySummary } from './NeoDaySummary';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { by, descBy } from '../../utils';
import * as NeoActions from './neo.actions';
import { RouteComponentProps } from 'react-router';
import * as style from './neo.css';

export namespace NeoList {
  export interface Props extends RouteComponentProps<void> {
    neos: NeoStoreState;
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
export class NeoList extends React.Component<NeoList.Props, NeoList.State> {
  isDangerous =(cur: IDayAggregatedData): boolean =>
    !!this.props.neos.display.
      slice().
      filter(({potentiallyHazardous}) => potentiallyHazardous).
      sort(descBy('potentiallyHazardous')).
      slice(0, 2).
      find(e => e.date === cur.date);

    componentDidMount() {
      this.props.actions.startPolling();
    }
    renderList = () =>
      this.props.neos.display.map((day, i) => (
        <NeoDaySummary isDangerous={this.isDangerous(day)}
                      {...day}
                      key={String(day) + i} />
      ));

  render() {
    return (
      <React.Fragment>
        <h1>Per-day Summary</h1>
        <table className={style.neoTable}>
          <thead>
          <tr>
            <th>Date</th>
            <th>Max Estimated Diameter</th>
            <th>Potentially Hazardous</th>
            <th>Closest</th>
            <th>Fastest</th>
          </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

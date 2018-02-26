import * as React from 'react';
import * as style from './neo.css';

interface Props extends IDayAggregatedData {
  isDangerous: boolean;
}

export const NeoDaySummary = (props: Props) => (
  <React.Fragment>
    <tr className={props.isDangerous ? style.dangerous : 'none'}>
      <td>{props.date.toLocaleDateString("en-US")}</td>
      <td>{props.maxEstimatedDiameterKm}</td>
      <td>{props.potentiallyHazardous}</td>
      <td>{props.closest}</td>
      <td>{props.fastest}</td>
    </tr>
  </React.Fragment>
);

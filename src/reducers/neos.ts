import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: NeoStoreState = {log : {}, aggregated: []};

export default handleActions<NeoStoreState, INeoLog>({
  [Actions.UPDATE_NEO]: (state, {payload}) => ({
    ...state,
    log: {...state.log, ...payload},
    aggregated: [
      ...state.aggregated,
      ...sortBy<IDayAggregatedData>('date', aggregate(payload))
    ]
  })
}, initialState);

const aggCloseApproachData = (agg: IDayAggregatedData, cad: ICloseApproachData[]):
  {closest: number, fastest: number} =>
    cad.reduce((res, cur) => ({
      closest: Math.min(res.closest, cur.miss_distance.kilometers),
      fastest: Math.max(res.fastest, cur.relative_velocity.kilometers_per_hour)
    }), {closest: agg.closest, fastest: agg.fastest});

const byDay = date =>
  (agg: IDayAggregatedData | undefined,
   neo: INeoItemData): IDayAggregatedData => ({
    date: new Date(date),
    maxEstimatedDiameterKm: Math.max(neo.estimated_diameter.kilometers.estimated_diameter_max, agg.maxEstimatedDiameterKm),
    potentiallyHazardous: agg.potentiallyHazardous + +neo.is_potentially_hazardous_asteroid,
    ...aggCloseApproachData(agg, neo.close_approach_data)
});

const sortBy = <T>(key, arr: T[], fn = x => x): T[] =>
  arr.slice().sort((a, b) =>
    a[key] - b[key] > 0
      ? 1
      : b[key] < 0 ? -1
      : 0);

const aggregate = (payload: INeoLog): IDayAggregatedData[] =>
  Object.keys(payload).map(date => ({
    date,
    ...payload[date].reduce(byDay(date), {
      maxEstimatedDiameterKm: 0,
      potentiallyHazardous: 0,
      closest: Number.MAX_SAFE_INTEGER,
      fastest: 0,
      date: null
    })
  }));


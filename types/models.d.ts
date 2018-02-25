/** TodoMVC model definitions **/

declare interface IEstimatedDiameter {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

declare interface ICloseApproachData {
  close_approach_date: string;
  epoch_date_close_approach: number;
  relative_velocity: {
      kilometers_per_second: number;
      kilometers_per_hour: number;
      miles_per_hour: number;
  };
  miss_distance: {
      astronomical: number;
      lunar: number;
      kilometers: number;
      miles: number
  };
  orbiting_body: string
}

declare interface INeoItemData {
  date?: string;
  links: {
      self: string;
  };
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
      kilometers: IEstimatedDiameter;
      meters: IEstimatedDiameter;
      miles: IEstimatedDiameter;
      feet: IEstimatedDiameter;
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: ICloseApproachData[];
}

declare interface INeoLog {
  [key: string]: INeoItemData[]
}

declare interface INasaNeoResponse {
  links: {
    next: string;
    prev: string;
    self: string;
  };
  element_count: number;
  near_earth_objects: INeoLog;
}

declare interface IDayAggregatedData {
  date: Date;
  maxEstimatedDiameterKm: number;
  potentiallyHazardous: number;
  closest: number;
  fastest: number;
}

declare type NeoItemId = number;

declare type NeoStoreState = {
  log: INeoLog | {};
  aggregated: IDayAggregatedData[];
}

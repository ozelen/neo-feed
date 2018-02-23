/** TodoMVC model definitions **/

declare interface NeoItemData {
  id?: NeoItemId;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: {
    relative_velocity: {
      kilometers_per_hour: number
    }
  };

  estimated_diameter: {
    kilometers: { estimated_diameter_max: number }
  };
}

declare type NeoItemId = number;
declare type NeoStoreState = {
  items: NeoItemData[]
}

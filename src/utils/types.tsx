export type City = {
  city_id: number;
  station_id: number;
  local_name: string;
  latitude: number;
  longitude: number;
  unique_name: string;
  station_unique_name: null;
  iscity: boolean;
  score: number;
  serviced: boolean;
  emoji: null;
  gpuid: string;
};

export type CityPopular = {
  id: number;
  unique_name: string;
  local_name: string;
  latitude: number;
  longitude: number;
  new_id: string;
  city_id: number;
  gpuid: string;
  nb_search: string;
  popular: true;
  iscity: true;
};


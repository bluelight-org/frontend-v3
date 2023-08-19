/* eslint-disable */

export interface SmallMission {
  id: number;
  keyword: string;
  alerted: boolean;
}

export interface LargeMission {
  id: number;
  address: string;
  latitude: number;
  longitude: number;
  keyword: string;
  details: string;
  vehicles: number[];
  alerted: boolean;
  alertTime: string;
}

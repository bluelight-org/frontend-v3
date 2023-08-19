/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { SmallStation } from "../models/station";
import { generateSmallMission } from "../models/mission";

export interface GetAllStations {
  meta: ResponseMetaData;
  data: SmallStation[];
}

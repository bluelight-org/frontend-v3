/* eslint-disable */
import { generateSmallMission, SmallMission } from "../models/mission";
import { ResponseMetaData } from "../models/meta";

export interface GetAllMissionsResponse {
  meta: ResponseMetaData;
  data: SmallMission[];
}

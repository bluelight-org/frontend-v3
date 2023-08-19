/* eslint-disable */
import { ResponseMetaData } from "../models/meta";
import { generateLargeStationMock, LargeStation } from "../models/station";

export interface UpdateStation {
  meta: ResponseMetaData;
  data: LargeStation;
}

/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeStationMock, LargeStation } from "../models/station";

export interface CreateStation {
  meta: ResponseMetaData;
  data: LargeStation;
}

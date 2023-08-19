/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeStationMock, LargeStation } from "../models/station";

export interface GetStation {
  meta: ResponseMetaData;
  data: LargeStation;
}

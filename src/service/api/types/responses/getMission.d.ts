/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeMissionMock, LargeMission } from "../models/mission";

export interface GetMission {
  meta: ResponseMetaData;
  data: LargeMission;
}

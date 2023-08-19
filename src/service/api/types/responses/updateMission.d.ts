/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeMissionMock, LargeMission } from "../models/mission";

export interface UpdateMission {
  meta: ResponseMetaData;
  data: LargeMission;
}

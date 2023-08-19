/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateVehicleMock, Vehicle } from "../models/vehicle";

export interface GetAllVehicles {
  meta: ResponseMetaData;
  data: Vehicle[];
}

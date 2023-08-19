/* eslint-disable */
import { ApiServiceInterface } from "./types/ApiServiceInterface";
import { CreateProfile } from "./types/responses/createProfile";
import { ErrorResponse } from "./types/responses/ErrorResponse";
import { CreateStation } from "./types/responses/createStation";
import { CreateVehicle } from "./types/responses/createVehicle";
import { GetAllMissionsResponse } from "./types/responses/getAllMissions";
import { GetAllStations } from "./types/responses/getAllStations";
import { GetAllVehicles } from "./types/responses/getAllVehicles";
import { GetMission } from "./types/responses/getMission";
import { GetStation } from "./types/responses/getStation";
import { UpdateMission } from "./types/responses/updateMission";
import { CreateMission } from "./types/responses/createMission";
import { UpdateProfile } from "./types/responses/updateProfile";
import { UpdateStation } from "./types/responses/updateStation";

export class MockApiService implements ApiServiceInterface {
  /**
   * @inheritDoc
   */
  async login(username: string, password: string): Promise<boolean> {
    if (username === "root" && password === "Admin123") {
      localStorage.setItem("accessToken", "root");
    }
    return username == "root" && password == "Admin123";
  }

  /**
   * @inheritDoc
   */
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    return [password === retypePassword, username];
  }

  /**
   * @inheritDoc
   */
  createMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[]
  ): Promise<CreateMission | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  createProfile(
    name: string,
    email: string,
    password: string
  ): Promise<CreateProfile | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  createStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<CreateStation | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  createVehicleOnStation(
    station_id: number,
    name: string,
    type: string
  ): Promise<CreateVehicle | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  deleteAllMissions(): Promise<boolean> {
    return Promise.resolve(false);
  }
  /**
   * @inheritDoc
   */
  deleteAllStations(): Promise<null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  deleteAllVehiclesOfStation(
    station_id: number
  ): Promise<ErrorResponse | null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  deleteMission(id: number): Promise<ErrorResponse | null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  deleteProfile(): Promise<null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  deleteStation(id: number): Promise<ErrorResponse | null> {
    return Promise.resolve(null);
  }
  /**
   * @inheritDoc
   */
  getAllMissions(): Promise<GetAllMissionsResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  getAllStations(): Promise<GetAllStations> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  getAllVehiclesOfStation(
    station_id: number
  ): Promise<GetAllVehicles | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  getMission(id: number): Promise<GetMission | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  getStation(id: number): Promise<GetStation | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  updateMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[],
    alerted: boolean
  ): Promise<UpdateMission | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  updateProfile(
    name: string,
    email: string
  ): Promise<UpdateProfile | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  updateStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<UpdateStation | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
}

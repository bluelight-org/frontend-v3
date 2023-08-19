import { ApiServiceInterface } from "@/service/api/types/ApiServiceInterface";
import { CreateMission } from "@/service/api/types/responses/createMission";
import { ErrorResponse } from "@/service/api/types/responses/ErrorResponse";
import { CreateProfile } from "@/service/api/types/responses/createProfile";
import { CreateStation } from "@/service/api/types/responses/createStation";
import { CreateVehicle } from "@/service/api/types/responses/createVehicle";
import { GetAllMissionsResponse } from "@/service/api/types/responses/getAllMissions";
import { GetAllStations } from "@/service/api/types/responses/getAllStations";
import { GetAllVehicles } from "@/service/api/types/responses/getAllVehicles";
import { GetMission } from "@/service/api/types/responses/getMission";
import { GetStation } from "@/service/api/types/responses/getStation";
import { UpdateMission } from "@/service/api/types/responses/updateMission";
import { UpdateProfile } from "@/service/api/types/responses/updateProfile";
import { UpdateStation } from "@/service/api/types/responses/updateStation";
import { ServerApiService } from "@/service/api/ServerApiService";
import { MockApiService } from "@/service/api/MockApiService";

export class ApiService implements ApiServiceInterface {
  private service: ApiServiceInterface;

  constructor() {
    switch (process.env.VUE_API_TYPE) {
      case "SERVER":
        this.service = new ServerApiService();
        break;
      case "MOCK":
        this.service = new MockApiService();
        break;
      default:
        this.service = new MockApiService();
        break;
    }
  }
  /**
   * @inheritDoc
   */
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    return await this.service.register(username, password, retypePassword);
  }
  /**
   * @inheritDoc
   */
  async login(username: string, password: string): Promise<boolean> {
    return await this.service.login(username, password);
  }
  /**
   * @inheritDoc
   */
  async createMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[]
  ): Promise<CreateMission | ErrorResponse> {
    return await this.service.createMission(
      address,
      latitude,
      longitude,
      keyword,
      details,
      vehicles
    );
  }
  /**
   * @inheritDoc
   */
  async createProfile(
    name: string,
    email: string,
    password: string
  ): Promise<CreateProfile | ErrorResponse> {
    return await this.service.createProfile(name, email, password);
  }
  /**
   * @inheritDoc
   */
  async createStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<CreateStation | ErrorResponse> {
    return await this.service.createStation(name, latitude, longitude);
  }
  /**
   * @inheritDoc
   */
  async createVehicleOnStation(
    station_id: number,
    name: string,
    type: string
  ): Promise<CreateVehicle | ErrorResponse> {
    return await this.service.createVehicleOnStation(station_id, name, type);
  }
  /**
   * @inheritDoc
   */
  async deleteAllMissions(): Promise<boolean> {
    return await this.service.deleteAllMissions();
  }
  /**
   * @inheritDoc
   */
  async deleteAllStations(): Promise<null> {
    return await this.service.deleteAllStations();
  }
  /**
   * @inheritDoc
   */
  async deleteAllVehiclesOfStation(
    station_id: number
  ): Promise<ErrorResponse | null> {
    return await this.service.deleteAllVehiclesOfStation(station_id);
  }
  /**
   * @inheritDoc
   */
  async deleteMission(id: number): Promise<ErrorResponse | null> {
    return await this.service.deleteMission(id);
  }
  /**
   * @inheritDoc
   */
  async deleteProfile(): Promise<null> {
    return await this.service.deleteProfile();
  }
  /**
   * @inheritDoc
   */
  async deleteStation(id: number): Promise<ErrorResponse | null> {
    return await this.service.deleteStation(id);
  }
  /**
   * @inheritDoc
   */
  async getAllMissions(): Promise<GetAllMissionsResponse> {
    return await this.service.getAllMissions();
  }
  /**
   * @inheritDoc
   */
  async getAllStations(): Promise<GetAllStations> {
    return await this.service.getAllStations();
  }
  /**
   * @inheritDoc
   */
  async getAllVehiclesOfStation(
    station_id: number
  ): Promise<GetAllVehicles | ErrorResponse> {
    return await this.service.getAllVehiclesOfStation(station_id);
  }
  /**
   * @inheritDoc
   */
  async getMission(id: number): Promise<GetMission | ErrorResponse> {
    return await this.service.getMission(id);
  }
  /**
   * @inheritDoc
   */
  async getStation(id: number): Promise<GetStation | ErrorResponse> {
    return await this.service.getStation(id);
  }
  /**
   * @inheritDoc
   */
  async updateMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[],
    alerted: boolean
  ): Promise<UpdateMission | ErrorResponse> {
    return await this.service.updateMission(
      address,
      latitude,
      longitude,
      keyword,
      details,
      vehicles,
      alerted
    );
  }
  /**
   * @inheritDoc
   */
  async updateProfile(
    name: string,
    email: string
  ): Promise<UpdateProfile | ErrorResponse> {
    return await this.service.updateProfile(name, email);
  }
  /**
   * @inheritDoc
   */
  async updateStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<UpdateStation | ErrorResponse> {
    return await this.service.updateStation(name, latitude, longitude);
  }
}

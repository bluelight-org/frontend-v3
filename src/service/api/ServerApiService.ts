/* eslint-disable */
import {ApiServiceInterface} from "./types/ApiServiceInterface";
import {CreateProfile} from "./types/responses/createProfile";
import {ErrorResponse} from "./types/responses/ErrorResponse";
import {CreateStation} from "./types/responses/createStation";
import {CreateVehicle} from "./types/responses/createVehicle";
import {GetAllMissionsResponse} from "./types/responses/getAllMissions";
import {GetAllStations} from "./types/responses/getAllStations";
import {GetAllVehicles} from "./types/responses/getAllVehicles";
import {GetMission} from "./types/responses/getMission";
import {GetStation} from "./types/responses/getStation";
import {UpdateMission} from "./types/responses/updateMission";
import {CreateMission} from "./types/responses/createMission";
import {UpdateProfile} from "./types/responses/updateProfile";
import {UpdateStation} from "./types/responses/updateStation";
import {AccessToken} from "./types/models/accessToken";

const PREFIX = process.env.VUE_API_ORIGIN ?? '';

/**
 *
 */
export class ServerApiService implements ApiServiceInterface {
  /**
   * @inheritDoc
   */
  async login(username: string, password: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  async register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  createMission(address: string, latitude: number, longitude: number, keyword: string, details: string, vehicles: number[]): Promise<CreateMission | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  createProfile(name: string, email: string, password: string): Promise<CreateProfile | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  createStation(name: string, latitude: number, longitude: number): Promise<CreateStation | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  createVehicleOnStation(station_id: number, name: string, type: string): Promise<CreateVehicle | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  deleteAllMissions(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  deleteAllStations(): Promise<null> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  deleteAllVehiclesOfStation(station_id: number): Promise<ErrorResponse | null> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  deleteMission(id: number): Promise<ErrorResponse | null> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  deleteProfile(): Promise<null> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  deleteStation(id: number): Promise<ErrorResponse | null> {
    throw new Error("Method not implemented.");
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
  getAllVehiclesOfStation(station_id: number): Promise<GetAllVehicles | ErrorResponse> {
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
  updateMission(address: string, latitude: number, longitude: number, keyword: string, details: string, vehicles: number[], alerted: boolean): Promise<UpdateMission | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  updateProfile(name: string, email: string): Promise<UpdateProfile | ErrorResponse> {
    throw new Error("Method not implemented.");
  }
  /**
   * @inheritDoc
   */
  updateStation(name: string, latitude: number, longitude: number): Promise<UpdateStation | ErrorResponse> {
    throw new Error("Method not implemented.");
  }


  // ----------------------------------------------------
  // Downside are all functions needed for the
  // refresh token implementation of the bluelight frontend
  // for the communication with the bluelight backend
  // ----------------------------------------------------

    private static accessToken: AccessToken;

    // This function fetches a new accessToken from the
    // backend, if the old expired
    private static getAccessToken(): Promise<AccessToken> {
        // TODO: rework this.
        // Also: Why do we use the username as the refresh token?
        // Another point: You use a function req to fetch it, but req requires the token anyway or tries to get it.
        return this.get<AccessToken>("/auth/accesstoken?username=" + localStorage.getItem("username"));
    }

    private static get<T>(path: string, emitError: boolean = true, blob: boolean = false): Promise<T> {
        return this.req<T>("GET", path, undefined, undefined, emitError, 0, blob);
    }

    private static post<T>(
        path: string,
        body?: any,
        emitError: boolean = true,
        contentType: string | undefined = "application/json"
    ): Promise<T> {
        return this.req<T>("POST", path, body, contentType, emitError);
    }


    private static async req<T>(
        method: string,
        path: string,
        body?: any,
        contentType: string | undefined = "application/json",
        emitError: boolean = true,
        counter: number = 0,
        blob: boolean = false
    ): Promise<T> {

        if (this.accessToken && new Date(+this.accessToken.deadline * 1000) < new Date()) {
            try {
                if (counter > 3) {
                    return "expired" as any;
                }
                this.accessToken = await this.getAccessToken();
                let newCounter = counter + 1;
                return this.req(method, path, body, contentType, emitError, newCounter, blob);
            } catch (e) {
                throw e;
            }
        }

        let reqBody = undefined;
        if (body) {
            if (typeof body !== "string" && contentType === "application/json") {
                reqBody = JSON.stringify(body);
            } else {
                reqBody = body;
            }
        }

        const headers: { [key: string]: string } = {};
        if (contentType !== "multipart/form-data") {
            headers["content-type"] = contentType;
        }

        if (this.accessToken) {
            headers["authorization"] = "accessToken " + this.accessToken.token;
        }

        const res = await window.fetch(`${PREFIX}${path}`, {
            method,
            headers,
            body: reqBody,
            credentials: "include",
            mode: process.env.NODE_ENV === "development" ? "cors" : "same-origin"
        });

        if (res.status === 401) {
            try {
                if (!blob) {
                    const resBody = (await res.json()) as ErrorResponse;
                    if (resBody.error.message[0] === "invalid access token") {
                        this.accessToken = await this.getAccessToken();
                        if (counter < 3) {
                            return this.req(method, path, body, contentType, emitError, counter + 1, blob);
                        } else {
                            return resBody as any;
                        }
                    }
                } else {
                    this.accessToken = await this.getAccessToken();
                    if (counter < 3) {
                        return this.req(method, path, body, contentType, emitError, counter + 1, blob);
                    } else {
                        return null as any;
                    }
                }
            } catch {}
        }

        if (res.status === 204 || res.headers.get("content-length") === "0") {
            return {} as T;
        }
        if (blob) {
            return await res.blob() as any;
        } else {
            return res.json();
        }
    }
}

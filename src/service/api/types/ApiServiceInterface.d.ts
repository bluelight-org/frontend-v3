// Interface for REST services

import { GetAllMissionsResponse } from "./responses/getAllMissions";
import { ErrorResponse } from "./responses/ErrorResponse";
import { CreateMission } from "./responses/createMission";
import { GetMission } from "./responses/getMission";
import { UpdateStation } from "./responses/updateStation";
import { UpdateProfile } from "./responses/updateProfile";
import { CreateProfile } from "./responses/createProfile";
import { GetAllStations } from "./responses/getAllStations";
import { CreateStation } from "./responses/createStation";
import { GetStation } from "./responses/getStation";
import { GetAllVehicles } from "./responses/getAllVehicles";
import { CreateVehicle } from "./responses/createVehicle";
import { UpdateMission } from "./responses/updateMission";

export interface ApiServiceInterface {
  /**
   * Handles user login
   *
   * @param username The username of the user
   * @param password The password of the user
   */
  login(username: string, password: string): Promise<boolean>;

  /**
   * Handles user registration.
   *
   * @param username The username of the user
   * @param password The password of the user
   * @param retypePassword The new password of the user
   */
  register(
    username: string,
    password: string,
    retypePassword: string
  ): Promise<[boolean, string]>;

  /**
   * Deletes all missions
   */
  deleteAllMissions(): Promise<boolean>;

  /**
   * Gets all missions
   */
  getAllMissions(): Promise<GetAllMissionsResponse>;

  /**
   * Creates a new mission
   *
   * @param address The address of the mission
   * @param latitude The latitude of the mission
   * @param longitude The longitude of the mission
   * @param keyword The keyword of the mission
   * @param details The details of the mission
   * @param vehicles The vehicles of the mission
   */
  createMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[]
  ): Promise<CreateMission | ErrorResponse>;

  /**
   * Deletes a specific mission
   *
   * @param id The ID of the mission that should be deleted
   */
  deleteMission(id: number): Promise<null | ErrorResponse>;

  /**
   * Gets a specific mission
   *
   * @param id The ID of the mission that should be fetched.
   */
  getMission(id: number): Promise<GetMission | ErrorResponse>;

  /**
   * Updates a specific mission
   *
   * @param address The new address
   * @param latitude The new latitude
   * @param longitude The new longitude
   * @param keyword The new keyword
   * @param details The new details
   * @param vehicles The new vehicles
   * @param alerted The new alerted
   */
  updateMission(
    address: string,
    latitude: number,
    longitude: number,
    keyword: string,
    details: string,
    vehicles: number[],
    alerted: boolean
  ): Promise<UpdateMission | ErrorResponse>;

  /**
   * Deletes the own profile
   */
  deleteProfile(): Promise<null>;

  /**
   * Updates the own profile
   *
   * @param name The name of the profile
   * @param email The new email
   */
  updateProfile(
    name: string,
    email: string
  ): Promise<UpdateProfile | ErrorResponse>;

  /**
   * Creates a new profile
   *
   * @param name The name of the profile
   * @param email The email of the profile
   * @param password The password of the profile
   */
  createProfile(
    name: string,
    email: string,
    password: string
  ): Promise<CreateProfile | ErrorResponse>;

  /**
   * Deletes all stations
   */
  deleteAllStations(): Promise<null>;

  /**
   * Gets all stations
   */
  getAllStations(): Promise<GetAllStations>;

  /**
   * Creates a new station
   *
   * @param name The name of the station
   * @param latitude The latitude of the station
   * @param longitude The longitude of the station
   */
  createStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<CreateStation | ErrorResponse>;

  /**
   * Deletes a specific station
   *
   * @param id The ID of the station that should be deleted
   */
  deleteStation(id: number): Promise<null | ErrorResponse>;

  /**
   * Gets a specific station
   *
   * @param id The ID of the station that should be fetched
   */
  getStation(id: number): Promise<GetStation | ErrorResponse>;

  /**
   * Updates a station
   *
   * @param name The new name of the station
   * @param latitude The latitude of the station
   * @param longitude The longitude of the station
   */
  updateStation(
    name: string,
    latitude: number,
    longitude: number
  ): Promise<UpdateStation | ErrorResponse>;

  /**
   * Deletes all vehicles of a station
   *
   * @param station_id The ID of the station
   */
  deleteAllVehiclesOfStation(station_id: number): Promise<null | ErrorResponse>;

  /**
   * Gets all vehicles of a station
   *
   * @param station_id The ID of the station
   */
  getAllVehiclesOfStation(
    station_id: number
  ): Promise<GetAllVehicles | ErrorResponse>;

  /**
   * Creates a vehicle on a station
   *
   * @param station_id The ID of the station
   * @param name The name of the station
   * @param type The type of the vehicle
   */
  createVehicleOnStation(
    station_id: number,
    name: string,
    type: string
  ): Promise<CreateVehicle | ErrorResponse>;
}

/* eslint-disable */
import { ResponseMetaData } from "../models/meta";
import { ErrorModel } from "../models/error";

export interface ErrorResponse {
  meta: ResponseMetaData;
  error: ErrorModel;
}

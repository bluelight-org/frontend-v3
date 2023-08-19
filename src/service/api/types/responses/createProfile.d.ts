/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateLargeProfileMock, LargeProfile } from "../models/profile";

export interface CreateProfile {
  meta: ResponseMetaData;
  data: LargeProfile;
}



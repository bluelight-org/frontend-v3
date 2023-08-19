/* eslint-disable */
import { generateMetaMock, ResponseMetaData } from "../models/meta";
import { generateSmallProfileMock, SmallProfile } from "../models/profile";

export interface UpdateProfile {
  meta: ResponseMetaData;
  data: SmallProfile;
}

import { ResponseMessage, ModelData } from './globalTypes';
export interface GetUser extends ResponseMessage {
  user?: User | null;
}

export interface LoginInfo extends ResponseMessage {
  email: string;
  password: string;
}



export interface User extends ModelData {
  email: string;
  name: string;
}


export interface LoginInfo extends ResponseMessage {
  email: string;
  password: string;
}

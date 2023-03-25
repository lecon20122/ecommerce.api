import {ModelCommonData, ResponseMessage} from './globalTypes';

export interface GetUser extends ResponseMessage {
  user?: User | null;
}

export interface LoginInfo extends ResponseMessage {
  email: string;
  password: string;
}


export interface User extends ModelCommonData {
  email: string;
  name: string;
  roles :
}


export interface LoginInfo extends ResponseMessage {
  email: string;
  password: string;
}

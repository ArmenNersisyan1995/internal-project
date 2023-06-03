import * as userDal from '../dal/user';
import {UserInput, UserOutput} from '../models/User';

export const create = (payload: UserInput): Promise<UserOutput> => {
  return userDal.create(payload);
};


export const getById = (id: number): Promise<UserOutput> => {
  return userDal.getById(id);
};
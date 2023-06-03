import { UserInput, UserOutput } from '../../../db/models/User';
import * as service from '../../../db/services/user';


export const create = async(payload: UserInput): Promise<UserOutput> => {
  return await service.create(payload);
};

export const getById = async (id: number): Promise<UserOutput> => {
  return await service.getById(id);
}
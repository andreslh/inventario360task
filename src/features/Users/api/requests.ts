import { BASE_URL } from '../../../app/constants';
import { User } from '../usersSlice';
import { parseUsers } from './parsers';

export interface UserAPI {
  id: string;
  name: string;
  phone: string;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${BASE_URL}users`);
  const items = await response.json();
  return parseUsers(items);
};

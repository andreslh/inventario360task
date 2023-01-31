import { BASE_URL } from '../../app/constants';
import { User } from './usersSlice';

export interface UserAPI {
  id: string;
  name: string;
  phone: string;
}

export const parseUsers = (items: UserAPI[]): User[] =>
  items.map((item) => ({
    id: item.id,
    name: item.name,
    phone: item.phone,
    favorite: false,
  }));

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${BASE_URL}users`);
  const items = await response.json();
  return parseUsers(items);
};

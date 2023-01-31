import { BASE_URL } from '../../../app/constants';
import { Album, User } from '../usersSlice';
import { parseAlbums, parseUsers } from './parsers';

export interface UserAPI {
  id: string;
  name: string;
  phone: string;
}

export interface AlbumAPI {
  id: string;
  title: string;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${BASE_URL}users`);
  const items = await response.json();
  return parseUsers(items);
};

export const getAlbums = async (id: string): Promise<Album[]> => {
  const response = await fetch(`${BASE_URL}users/${id}/albums`);
  const items = await response.json();
  return parseAlbums(items);
};

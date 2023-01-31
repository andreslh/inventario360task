import { LEAD_GO_GO } from '../../../app/constants';
import { User } from '../usersSlice';

export interface UserAPI {
  id: string;
  name: string;
  phone: string;
}

export const parseUsers = (items: UserAPI[]): User[] =>
  items.map((item) => ({
    id: item.id.toString(),
    name: item.name,
    phone: item.phone,
    favorite: !!localStorage.getItem(`${LEAD_GO_GO}-users-${item.id}`),
  }));

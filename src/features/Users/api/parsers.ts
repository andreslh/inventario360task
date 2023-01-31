import { LEAD_GO_GO } from '../../../app/constants';
import { Album, User } from '../usersSlice';
import { AlbumAPI } from './requests';

import sample1 from '../../../components/Modal/sample1.jpg';
import sample2 from '../../../components/Modal/sample2.jpg';

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
    // NOTE: There was no body on the API so I set this data as example only
    body: 'A busy PhD Student who needs a quiet place to study and read without distractions. He spends a lot of time on campus, refuels often and is a major coffee lover. He is the ideal customer for Julia’s Cafe. He wants to receive quick and professional service; order online from his smartphone to avoid lineups, and not deal with over-conversational staff members.',
    favorite: !!localStorage.getItem(`${LEAD_GO_GO}-users-${item.id}`),
  }));

export const parseAlbums = (items: AlbumAPI[]): Album[] =>
  items.map((item, index) => ({
    id: item.id.toString(),
    title: item.title,
    // NOTE: There was no image on the API so I set this data as example only
    image: index % 2 === 0 ? sample1 : sample2,
  }));

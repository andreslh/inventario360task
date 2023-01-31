import { User } from '../../features/Users/usersSlice';

export function findUser(users: User[], id?: string): User | undefined {
  return users.length && id ? users.find((user) => user.id === id) : undefined;
}

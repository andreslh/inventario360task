import { PostsState } from '../features/Posts/postsSlice';
import { UsersState } from '../features/Users/usersSlice';
import { LEAD_GO_GO, ENTITIES } from './constants';

export const toggleFavorite = (
  id: string,
  state: PostsState | UsersState,
  entity: ENTITIES
): { index: number; isFavorite: boolean } => {
  const localStorageItem = `${LEAD_GO_GO}-${entity}-${id}`;
  const isFavorite = !!localStorage.getItem(localStorageItem);

  if (!isFavorite) {
    localStorage.setItem(localStorageItem, 'true');
  } else {
    localStorage.removeItem(localStorageItem);
  }

  const index = state.data.findIndex((post) => post.id === id);

  console.log(isFavorite);
  return {
    index,
    isFavorite: isFavorite ? false : true,
  };
};

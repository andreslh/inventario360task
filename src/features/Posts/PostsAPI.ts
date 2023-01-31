import { BASE_URL } from '../../app/constants';
import { UserAPI } from '../Users/UsersAPI';
import { Post } from './postsSlice';

interface PostAPI {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export const parsePosts = (items: PostAPI[], users: UserAPI[]): Post[] =>
  items.map((item) => {
    const author = users.find((user) => user.id === item.userId);

    return {
      id: item.id,
      title: item.title,
      author: author ? author.name : '',
      favorite: false,
      body: item.body,
    };
  });

export const getPosts = async (users: UserAPI[]): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}posts`);
  const items = await response.json();
  return parsePosts(items, users);
};

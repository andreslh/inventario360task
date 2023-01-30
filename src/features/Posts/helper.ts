import { Post } from './postsSlice';

interface PostAPI {
  id: string;
  title: string;
  body: string;
}

export const parsePosts = (items: PostAPI[]): Post[] =>
  items.map((item: { id: string; title: string; body: string }) => ({
    id: item.id,
    title: item.title,
    author: 'John Doe',
    favorite: false,
    body: item.body,
  }));

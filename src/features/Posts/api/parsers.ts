import { LEAD_GO_GO } from '../../../app/constants';
import { UserAPI } from '../../Users/api/parsers';
import { Post, Comment } from '../postsSlice';

interface PostAPI {
  id: string;
  userId: string;
  title: string;
  body: string;
}

interface CommentAPI {
  id: string;
  body: string;
}

export const parsePosts = (items: PostAPI[], users: UserAPI[]): Post[] =>
  items.map((item) => {
    const author = users.find((user) => user.id === item.userId.toString());

    return {
      id: item.id.toString(),
      title: item.title,
      author: author ? author.name : '',
      favorite: !!localStorage.getItem(`${LEAD_GO_GO}-posts-${item.id}`),
      body: item.body,
    };
  });

export const parseComments = (items: CommentAPI[]): Comment[] =>
  items.map((item) => ({
    id: item.id.toString(),
    body: item.body,
  }));

import { BASE_URL } from '../../../app/constants';
import { parsePosts, parseComments } from './parsers';
import { Post, Comment } from '../postsSlice';
import { UserAPI } from '../../Users/api/parsers';

export const getPosts = async (users: UserAPI[]): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}posts`);
  const items = await response.json();
  return parsePosts(items, users);
};

export const getComments = async (id: string): Promise<Comment[]> => {
  const response = await fetch(`${BASE_URL}posts/${id}/comments`);
  const comments = await response.json();
  return parseComments(comments);
};

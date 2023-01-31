import { Post } from '../../features/Posts/postsSlice';

export function findPost(posts: Post[], id?: string): Post | undefined {
  return posts.length && id ? posts.find((post) => post.id === id) : undefined;
}

export function isPost(item: any): item is Post {
  return item && 'id' in item && 'title' in item && 'author' in item;
}

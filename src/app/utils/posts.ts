import { Post } from '../../features/Posts/postsSlice';

export function findPost(posts: Post[], id?: string): Post | undefined {
  return posts.length && id ? posts.find((post) => post.id === id) : undefined;
}

export function isPost(item: any): item is Post {
  return item && 'id' in item && 'title' in item && 'author' in item;
}

export const parseEntity = (item: any) => {
  return isPost(item)
    ? {
        name: item.title,
        detail: item.author,
        detailPrefix: 'By ',
        body: item.body,
      }
    : {
        name: item.name,
        detail: item.phone,
        detailPrefix: '',
        body: item.body,
      };
};

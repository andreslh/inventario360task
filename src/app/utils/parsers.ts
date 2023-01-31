import { isPost } from './posts';

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

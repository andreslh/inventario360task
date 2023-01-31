import { rest } from 'msw';
import { setupServer } from 'msw/node';

import users from './mocks/users.json';
import posts from './mocks/posts.json';

const server = () =>
  setupServer(
    rest.get('/users', (req, res, ctx) => {
      return res(ctx.json(users));
    }),
    rest.get('/posts', (req, res, ctx) => {
      return res(ctx.json(posts));
    })
  );

export default server;

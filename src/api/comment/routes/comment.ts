/**
 * comment router
 */

import { factories } from '@strapi/strapi';

const routes = [
  {
    method: 'PUT',
    path: '/comments/:id/moderate',
    handler: 'comment.moderate',
    config: {
      auth: { scope: ['moderate'] }
    }
  }
];

export default factories.createCoreRouter('api::comment.comment');

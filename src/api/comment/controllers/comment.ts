/**
 * comment controller
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

interface ModerateRequestBody {
  data: {
    status: 'approved' | 'rejected';
  };
}

export default factories.createCoreController('api::comment.comment', ({strapi}) => ({
  async create(ctx: Context) {
    // Add IP address to the comment data
    ctx.request.body.data = {
      ...ctx.request.body.data,
      ipAddress: ctx.request.ip,
      status: 'pending' // Ensure new comments start as pending
    };

    // Create the comment
    const response = await super.create(ctx);
    return response;
  },

  async moderate(ctx: Context) {
    const { id } = ctx.params;
    const { data: { status } } = ctx.request.body as ModerateRequestBody;

    if (!['approved', 'rejected'].includes(status)) {
      return ctx.badRequest('Invalid status');
    }

    // Update the comment with moderation info
    const result = await strapi.entityService.update('api::comment.comment', id, {
      data: {
        status,
        moderatedBy: ctx.state.user.id,
        moderatedAt: new Date().toISOString()
      }
    });

    return this.transformResponse(result);
  }
}));

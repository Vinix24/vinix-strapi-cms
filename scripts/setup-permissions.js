const setupPermissions = async () => {
  try {
    // Get the public role
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    // Define permissions for public role
    const publicPermissions = {
      'api::blog-post': ['find', 'findOne'],
      'api::category': ['find', 'findOne'],
      'api::author': ['find', 'findOne'],
      'api::case-study': ['find', 'findOne'],
      'api::comment': ['find', 'findOne', 'create']
    };

    // Update public role permissions
    const publicPermissionsArray = [];
    Object.entries(publicPermissions).forEach(([controller, actions]) => {
      actions.forEach(action => {
        publicPermissionsArray.push({
          action: `${controller}.${action}`,
          enabled: true
        });
      });
    });

    await strapi.query('plugin::users-permissions.permission').updateMany({
      where: { role: publicRole.id },
      data: { enabled: false }
    });

    for (const permission of publicPermissionsArray) {
      await strapi.query('plugin::users-permissions.permission').update({
        where: {
          action: permission.action,
          role: publicRole.id
        },
        data: {
          enabled: permission.enabled
        }
      });
    }

    // Get the authenticated role
    const authenticatedRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'authenticated' }
    });

    // Define permissions for authenticated role
    const authenticatedPermissions = {
      'api::blog-post': ['find', 'findOne'],
      'api::category': ['find', 'findOne'],
      'api::author': ['find', 'findOne'],
      'api::case-study': ['find', 'findOne'],
      'api::comment': ['find', 'findOne', 'create', 'update', 'delete']
    };

    // Update authenticated role permissions
    const authenticatedPermissionsArray = [];
    Object.entries(authenticatedPermissions).forEach(([controller, actions]) => {
      actions.forEach(action => {
        authenticatedPermissionsArray.push({
          action: `${controller}.${action}`,
          enabled: true
        });
      });
    });

    await strapi.query('plugin::users-permissions.permission').updateMany({
      where: { role: authenticatedRole.id },
      data: { enabled: false }
    });

    for (const permission of authenticatedPermissionsArray) {
      await strapi.query('plugin::users-permissions.permission').update({
        where: {
          action: permission.action,
          role: authenticatedRole.id
        },
        data: {
          enabled: permission.enabled
        }
      });
    }

    console.log('Permissions setup completed successfully');
  } catch (error) {
    console.error('Error setting up permissions:', error);
  }
};

module.exports = setupPermissions;

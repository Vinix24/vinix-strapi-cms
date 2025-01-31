export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          folder: 'vinix-marketing',
        },
        uploadStream: {
          folder: 'vinix-marketing',
        },
        delete: {},
      },
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
    },
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      ratelimit: {
        interval: 60000,
        max: 100,
      },
      register: {
        allowedFields: ['username', 'email', 'password', 'name'],
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'noreply@vinixconsulting.nl',
        defaultReplyTo: 'contact@vinixconsulting.nl',
      },
    },
  },
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::blog-post.blog-post',
          draft: {
            url: 'http://localhost:3000/blog/preview/',
            query: {
              slug: '{slug}',
              secret: env('PREVIEW_SECRET'),
            },
          },
          published: {
            url: 'http://localhost:3000/blog/',
            query: {
              slug: '{slug}',
            },
          },
        },
        {
          uid: 'api::case-study.case-study',
          draft: {
            url: 'http://localhost:3000/case-studies/preview/',
            query: {
              slug: '{slug}',
              secret: env('PREVIEW_SECRET'),
            },
          },
          published: {
            url: 'http://localhost:3000/case-studies/',
            query: {
              slug: '{slug}',
            },
          },
        },
      ],
    },
  },
});

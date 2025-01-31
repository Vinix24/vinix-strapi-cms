export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Memory optimization settings
  url: env('PUBLIC_URL', 'https://vinix-website-production.up.railway.app'),
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
  admin: {
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    watchIgnoreFiles: [
      '**/config/sync/**',
      '**/exports/**',
    ],
  },
  // Performance optimization
  middleware: {
    timeout: 100,
    load: {
      before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
      order: [
        "Define the middlewares' load order by putting their name in this array is the right order",
      ],
      after: ['parser', 'router'],
    },
  },
  settings: {
    cors: {
      enabled: true,
      origin: env('CORS_ORIGIN', 'https://vinixconsulting.nl'),
    },
    gzip: {
      enabled: true,
    },
    responseTime: {
      enabled: true,
    },
    poweredBy: false,
    logger: {
      level: env('LOG_LEVEL', 'debug'),
      requests: env.bool('LOG_REQUESTS', true),
    },
  },
});

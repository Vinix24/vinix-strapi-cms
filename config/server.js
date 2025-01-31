module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: [
      'ZqRxwHx1mUv9ZbBLlrpwJw==',
      '2YmUXQXyevxH2PhYLgmdbw==',
      'uBH8V1RPqdD++IFpYPX2IA==',
      'qCMA6eMvxy/e6mwRWAqypw=='
    ],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

const config = {
  app: {
    port: process.env.PORT || 3020,
  },

  db: {
    uri: process.env.URI,
  },
};

module.exports = config;

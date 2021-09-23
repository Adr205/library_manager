const config = {
  app: {
    port: process.env.PORT || 3020,
  },

  db: {
    uri: "mongodb+srv://a01242469:Ferrari2013@webproject.xkamh.mongodb.net/Biblioteca_Ranchito?retryWrites=true&w=majority",
  },
};

module.exports = config;

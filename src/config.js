module.exports = {
  app: process.env.APP || 'dev',
  port: process.env.PORT || '4000',
  mongo_db:
    process.env.MONGO_DB ||
    'mongodb://nikolay:nikolay1311@ds016108.mlab.com:16108/magmer'
};

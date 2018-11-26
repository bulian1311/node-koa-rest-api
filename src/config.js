module.exports = {
  app: process.env.APP || 'dev',
  port: process.env.PORT || '4000',
  mongo_db:
    //process.env.MONGO_DB ||
    'mongodb://bulian1311:bulian1311@ds026018.mlab.com:26018/magmer-test',
  secret: 'MagMerTheBest'
};

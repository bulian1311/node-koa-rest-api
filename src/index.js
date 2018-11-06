const Koa = require('koa');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');
const mongoose = require('mongoose');

const config = require('./config');
const router = require('./router');

// DB connect
(async () => {
  try {
    await mongoose.connect(
      config.mongo_db,
      { useNewUrlParser: true }
    );
    console.log('Mongo conect.');
  } catch (err) {
    console.error(err.message);
  }
})();

const app = new Koa();

app.use(json());
app.use(bodyparser());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, () => console.log(`App listen on port ${config.port}`));

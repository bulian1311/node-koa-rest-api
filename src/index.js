const Koa = require('koa');
const json = require('koa-json');
const config = require('./config');
const router = require('./router');

const app = new Koa();

app.use(json());
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, () => console.log(`App listen on port ${config.port}`));

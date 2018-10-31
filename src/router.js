const Router = require('koa-router');
const homeController = require('./controllers/home');
const productController = require('./controllers/products');

const router = new Router();

router.get('/', homeController.home);

router.get('/products', productController.getAll);

module.exports = router;

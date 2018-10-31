const Router = require('koa-router');
const homeController = require('./controllers/home');
const productController = require('./controllers/product');

const router = new Router();

router.get('/', homeController.home);

router.get('/product', productController.getAll);
router.get('/product/:id', productController.getOne);
router.post('/product', productController.create);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.delete);

module.exports = router;

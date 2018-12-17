const Router = require('koa-router');
const jwt = require('koa-jwt');

const HomeController = require('./controllers/home');
const ProductController = require('./controllers/product');
const CategoryController = require('./controllers/category');
const TagController = require('./controllers/tag');
const ProducerController = require('./controllers/producer');
const config = require('./config');

const router = new Router();

// Public routes
router.get('/', HomeController.home);

router.get('/product/list', ProductController.getAll);
router.get('/product/list/:count', ProductController.getSome);
router.get('/product/:id', ProductController.getOne);

router.get('/category/list', CategoryController.getAll);
router.get('/category/:id', CategoryController.getOne);

router.get('/tag/list', TagController.getAll);
router.get('/tag/:id', TagController.getOne);

router.get('/producer/list', ProducerController.getAll);
router.get('/producer/:id', ProducerController.getOne);

// Jwt protection
router.use(jwt({ secret: config.secret }));

// Protected routes
router.post('/product', ProductController.create);
router.post('/product/list', ProductController.createMany);
router.put('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.delete);

router.post('/category', CategoryController.create);
router.post('/category/list', CategoryController.create);
router.put('/category/:id', CategoryController.update);
router.delete('/category/:id', CategoryController.delete);

router.post('/tag', TagController.create);
router.post('/tag/list', TagController.createMany);
router.put('/tag/:id', TagController.update);
router.delete('/tag/:id', TagController.delete);

router.post('/producer', ProducerController.create);
router.put('/producer/:id', ProducerController.update);
router.delete('/producer/:id', ProducerController.delete);

module.exports = router;

const Router = require('koa-router');
const jwt = require('koa-jwt');

const HomeController = require('./controllers/home');
const ProductController = require('./controllers/product');
const TagController = require('./controllers/tag');
const ProducerController = require('./controllers/producer');
const config = require('./config');

const router = new Router();

// Public routes
router.get('/', HomeController.home);

router.get('/product', ProductController.getAll);
router.get('/product/:id', ProductController.getOne);

router.get('/tag', TagController.getAll);
router.get('/tag/:id', TagController.getOne);

router.get('/producer', ProducerController.getAll);

// Jwt protection
router.use(jwt({ secret: config.secret }));

// Protected routes
router.post('/product', ProductController.create);
router.put('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.delete);

router.post('/tag', TagController.create);
router.put('/tag/:id', TagController.update);
router.delete('/tag/:id', TagController.delete);

module.exports = router;

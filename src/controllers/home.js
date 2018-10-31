class Home {
  async home(ctx, next) {
    ctx.body = {
      msg: 'Home',
      products: {
        endpoint: '/products',
        method: 'GET',
        description: ''
      }
    };
  }
}

module.exports = new Home();

class Products {
  async getAll(ctx, next) {
    ctx.body = { msg: 'Get all Products' };
  }
}

module.exports = new Products();

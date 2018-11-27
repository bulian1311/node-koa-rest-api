const Product = require('../models/product');

class ProductsController {
  /**
   * Получить весь список продуктов из базы.
   * @param {*} ctx
   * @param {*} next
   */
  async getAll(ctx, next) {
    try {
      const products = await Product.find();
      ctx.body = products;
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }

  /**
   * Получить один продукт по иденьтификатору.
   * @param {*} ctx
   * @param {*} next
   */
  async getOne(ctx, next) {
    const { id } = ctx.params;

    try {
      const product = await Product.findById(id);
      ctx.body = product;
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }

  /**
   * Создать новый продукт в базе данных.
   * @param {*} ctx
   * @param {*} next
   */
  async create(ctx, next) {
    const product = new Product(ctx.request.body);

    try {
      await product.save();
      ctx.body = { msg: 'success' };
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }

  /**
   * Отредактировать один продукт в базе данных по иденьтификатору.
   * @param {*} ctx
   * @param {*} next
   */
  async update(ctx, next) {
    const { id } = ctx.params;

    try {
      await Product.findByIdAndUpdate(id, ctx.request.body);
      ctx.body = { msg: 'success' };
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }

  /**
   * Удалить один продукт из базы данных по иденьтификатору.
   * @param {*} ctx
   * @param {*} next
   */
  async delete(ctx, next) {
    const { id } = ctx.params;

    try {
      await Product.findByIdAndRemove(id);
      ctx.body = { msg: 'success' };
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }

  /**
   * Добавить список продуктов в базу данных.
   * @param {*} ctx
   */
  async createMany(ctx) {
    const { products } = ctx.body;
    try {
      Product.create(products);
      ctx.body = { msg: 'success' };
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }
}

module.exports = new ProductsController();

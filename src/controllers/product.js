const Product = require('../models/product');
const Category = require('../models/category');
const Producer = require('../models/producer');
const Tag = require('../models/tag');

class ProductsController {
  /**
   * Получить весь список продуктов из базы.
   * @param {*} ctx
   */
  async getAll(ctx) {
    try {
      const products = await Product.find();
      ctx.body = products;
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }

  /**
   * Получить необходимое число продуктов
   * @param {*} ctx
   */
  async getSome(ctx) {
    const { count } = ctx.params;

    try {
      const products = await Product.find().limit(parseInt(count));
      ctx.body = products;
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }

  /**
   * Получить один продукт по иденьтификатору.
   * @param {*} ctx
   */
  async getOne(ctx) {
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
   */
  async create(ctx) {
    const {
      title,
      description,
      price,
      url,
      images,
      specifications
    } = ctx.request.body;

    let producer = null;
    let category = null;
    let tags = [];

    try {
      producer = await Producer.findOrCreate(ctx.request.body.producer);
      category = await Category.findOrCreate(ctx.request.body.category);

      for (let i = 0; i < ctx.request.body.tags.length; i++) {
        let t = await Tag.findOrCreate(ctx.request.body.tags[i]);
        tags.push(t.doc);
      }
    } catch (err) {
      console.error(err.message);
    }

    const product = new Product({
      title,
      description,
      price,
      url,
      images,
      specifications,
      producer: producer.doc,
      category: category.doc,
      tags
    });

    try {
      await product.save();
      ctx.body = { msg: 'product created success' };
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }

  /**
   * Отредактировать один продукт в базе данных по иденьтификатору.
   * @param {*} ctx
   */
  async update(ctx) {
    const { id } = ctx.params;

    try {
      await Product.findByIdAndUpdate(id, ctx.request.body);
      ctx.body = { msg: 'product updated success' };
    } catch (err) {
      console.error(err.message);
      ctx.body = { msg: err.message };
    }
  }

  /**
   * Удалить один продукт из базы данных по иденьтификатору.
   * @param {*} ctx
   */
  async delete(ctx) {
    const { id } = ctx.params;

    try {
      await Product.findByIdAndRemove(id);
      ctx.body = { msg: 'product deleted success' };
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
    try {
      await Product.create(ctx.request.body);
      ctx.body = { msg: 'products created success' };
    } catch (err) {
      console.error(+err.message);
      ctx.body = { msg: err.message };
    }
  }
}

module.exports = new ProductsController();

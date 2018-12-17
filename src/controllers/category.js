const Category = require('../models/category');

class CategoryController {
  /**
   * Получить весь список категорий из базы данных.
   * @param {*} ctx
   */
  async getAll(ctx) {
    try {
      const categories = await Category.find();
      ctx.body = categories;
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }

  /**
   * Получить категорию из базы данных по иденьтификатору.
   * @param {*} ctx
   */
  async getOne(ctx) {
    const { id } = ctx.params;
    try {
      const category = await Category.findById(id);
      ctx.body = category;
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.throw);
    }
  }

  /**
   * Записать новую категорию в базу данных.
   * @param {*} ctx
   */
  async create(ctx) {
    const category = new Category(ctx.request.body);
    try {
      await category.save();
      ctx.body = { msg: 'category created success' };
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }

  /**
   * Отредактировать категорию в базе данных по идентификатору.
   * @param {*} ctx
   */
  async update(ctx) {
    const { id } = ctx.params;
    try {
      await Category.findByIdAndUpdate(id, ctx.request.body);
      ctx.body = { msg: 'category updated success' };
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }

  /**
   * Удалить категорию из базы данных по идентификатору.
   * @param {*} ctx
   */
  async delete(ctx) {
    const { id } = ctx.params;
    try {
      await Category.findByIdAndRemove(id);
      ctx.body = { msg: 'category deleted success' };
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }
}

module.exports = new CategoryController();

const Tag = require('../models/tag');

class TagController {
  /**
   * Получить список всех тегов из базы данных.
   * @param {*} ctx
   */
  async getAll(ctx) {
    try {
      const tags = await Tag.find();
      ctx.body = tags;
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }

  /**
   * Получить тег из базы банных по иденьтификатору.
   * @param {*} ctx
   */
  async getOne(ctx) {
    const { id } = ctx.params;
    try {
      const tag = await Tag.findById(id);
      ctx.body = tag;
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.throw);
    }
  }

  /**
   * Записать новый тег в базу данных.
   * @param {*} ctx
   */
  async create(ctx) {
    const tag = new Tag(ctx.request.body);
    try {
      await tag.save();
      ctx.body = { msg: 'success' };
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }

  /**
   * Отредактировать тег в базе данных по идентификатору.
   * @param {*} ctx
   */
  async update(ctx) {
    const { id } = ctx.params;
    try {
      await Tag.findByIdAndUpdate(id, ctx.request.body);
      ctx.body = { msg: 'success' };
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }

  /**
   * Удалить тег из базы данных по идентификатору.
   * @param {*} ctx
   */
  async delete(ctx) {
    const { id } = ctx.params;
    try {
      await Tag.findByIdAndRemove(id);
      ctx.body = { msg: 'success' };
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }
}

module.exports = new TagController();

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
}

module.exports = new TagController();

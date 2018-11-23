const Producer = require('../models/producer');

class ProducerController {
  /**
   * Получить список всех поставщиков из базы данных.
   * @param {*} ctx
   */
  async getAll(ctx) {
    try {
      const producers = Producer.find();
      ctx.body = producers;
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }
}

module.exports = new ProducerController();

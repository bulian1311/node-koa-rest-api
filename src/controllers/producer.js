const Producer = require('../models/producer');

class ProducerController {
  /**
   * Получить список всех поставщиков из базы данных.
   * @param {*} ctx
   */
  async getAll(ctx) {
    try {
      const producers = await Producer.find();
      ctx.body = producers;
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }

  /**
   * Получить поставщика из базы данных по иденьтификатору.
   * @param {*} ctx
   */
  async getOne(ctx) {
    const { id } = ctx.params;
    try {
      const producer = await Producer.findById(id);
      ctx.body = producer;
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.throw);
    }
  }

  /**
   * Записать нового поставщика в базу данных.
   * @param {*} ctx
   */
  async create(ctx) {
    const producer = new Producer(ctx.request.body);
    try {
      await producer.save();
      ctx.body = { msg: 'producer created success' };
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }

  /**
   * Отредактировать поставщика в базе данных по идентификатору.
   * @param {*} ctx
   */
  async update(ctx) {
    const { id } = ctx.params;
    try {
      await Producer.findByIdAndUpdate(id, ctx.request.body);
      ctx.body = { msg: 'producer updated success' };
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
      await Producer.findByIdAndRemove(id);
      ctx.body = { msg: 'producer deleted success' };
    } catch (err) {
      console.error(err.message);
      ctx.throw(400, err.message);
    }
  }
}

module.exports = new ProducerController();

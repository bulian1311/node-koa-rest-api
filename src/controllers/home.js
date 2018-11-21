class Home {
  async home(ctx, next) {
    ctx.body = {
      msg: 'MagMer API',
      info: {
        requests: [
          {
            endpoint: '/product',
            method: 'GET',
            description: 'Получить список всех продуктов.',
            jwt: false,
            parameters: 'none'
          },
          {
            endpoint: '/product',
            method: 'POST',
            description: 'Добавить новый продукт в базу данных',
            jwt: true,
            parameters: {
              title: 'string',
              description: 'string',
              price: 'string',
              url: 'string',
              images: [{ url: 'string' }]
            }
          },
          {
            endpoint: '/product/{id}',
            method: 'GET',
            description: 'Получить продукт из базы данных по иденьтификатору.',
            jwt: false,
            parameters: 'none'
          },
          {
            endpoint: '/product/{id}',
            method: 'PUT',
            description:
              'Отредактировать продукт в базе данных по иденьтификатору.',
            jwt: true,
            parameters: {
              title: 'string',
              description: 'string',
              price: 'string',
              url: 'string',
              images: [{ url: 'string' }]
            }
          },
          {
            endpoint: '/product/{id}',
            method: 'DELETE',
            description: 'Удалить продукт из базы данных.',
            jwt: true,
            parameters: 'none'
          }
        ]
      }
    };
  }
}

module.exports = new Home();

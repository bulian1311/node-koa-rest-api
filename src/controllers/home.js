class Home {
  async home(ctx) {
    ctx.body = {
      msg: 'MagMer API',
      info: {
        requests: [
          {
            endpoint: '/product/list',
            method: 'GET',
            description: 'Получить список всех продуктов.',
            jwt: false,
            parameters: 'none'
          },
          {
            endpoint: '/product/list/{count}',
            method: 'GET',
            description: 'Получить определенное колличество продуктов.',
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
              images: [{ url: 'string' }],
              specifications: { key: 'value' },
              category: 'string',
              tag: 'string'
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
          },

          {
            endpoint: '/category/list',
            method: 'GET',
            description: 'Получить список всех категорий.',
            jwt: false,
            parameters: 'none'
          },
          {
            endpoint: '/category',
            method: 'POST',
            description: 'Добавить новую категорию в базу данных',
            jwt: true,
            parameters: {
              title: 'string'
            }
          },
          {
            endpoint: '/category/{id}',
            method: 'GET',
            description:
              'Получить категорию из базы данных по иденьтификатору.',
            jwt: false,
            parameters: 'none'
          },
          {
            endpoint: '/category/{id}',
            method: 'PUT',
            description:
              'Отредактировать категорию в базе данных по иденьтификатору.',
            jwt: true,
            parameters: {
              title: 'string'
            }
          },
          {
            endpoint: '/category/{id}',
            method: 'DELETE',
            description: 'Удалить категорию из базы данных.',
            jwt: true,
            parameters: 'none'
          },

          {
            endpoint: '/tag/list',
            method: 'GET',
            description: 'Получить список всех тегов.',
            jwt: false,
            parameters: 'none'
          },
          {
            endpoint: '/tag',
            method: 'POST',
            description: 'Добавить новый тег в базу данных',
            jwt: true,
            parameters: {
              title: 'string'
            }
          },
          {
            endpoint: '/tag/{id}',
            method: 'GET',
            description: 'Получить тег из базы данных по иденьтификатору.',
            jwt: false,
            parameters: 'none'
          },
          {
            endpoint: '/tag/{id}',
            method: 'PUT',
            description:
              'Отредактировать тег в базе данных по иденьтификатору.',
            jwt: true,
            parameters: {
              title: 'string'
            }
          },
          {
            endpoint: '/tag/{id}',
            method: 'DELETE',
            description: 'Удалить тег из базы данных.',
            jwt: true,
            parameters: 'none'
          },

          {
            endpoint: '/producer/list',
            method: 'GET',
            description: 'Получить список всех поставщиков.',
            jwt: false,
            parameters: 'none'
          },
          {
            endpoint: '/producer',
            method: 'POST',
            description: 'Добавить нового поставщика в базу данных',
            jwt: true,
            parameters: {
              name: 'string',
              url: 'string'
            }
          },
          {
            endpoint: '/producer/{id}',
            method: 'GET',
            description:
              'Получить поставщика из базы данных по иденьтификатору.',
            jwt: false,
            parameters: 'none'
          },
          {
            endpoint: '/producer/{id}',
            method: 'PUT',
            description:
              'Отредактировать поставщика в базе данных по иденьтификатору.',
            jwt: true,
            parameters: {
              name: 'string',
              url: 'string'
            }
          },
          {
            endpoint: '/producer/{id}',
            method: 'DELETE',
            description: 'Удалить поставщика из базы данных.',
            jwt: true,
            parameters: 'none'
          }
        ]
      }
    };
  }
}

module.exports = new Home();

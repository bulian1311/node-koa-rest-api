const Product = require('../src/models/product');
const Producer = require('../src/models/producer');
const Category = require('../src/models/category');
const Tag = require('../src/models/tag');

module.exports = async () => {
  try {
    await Product.deleteMany({});
    await Category.deleteMany({});
    await Producer.deleteMany({});
    await Tag.deleteMany({});

    const producer = new Producer({ name: 'Test producer 1', url: 'test1.ru' });
    const category = new Category({ title: 'Test category 1' });
    const tag = new Tag({ title: 'Test tag 1' });
    const product = new Product({
      title: 'Test product 1',
      description: 'Test description 1',
      price: 123,
      url: 'test.ru',
      images: [{ url: 'image.ru', alt: 'test img' }],
      specifications: { 'test key': 'test value' },
      producer,
      category,
      tags: [tag]
    });

    await Product.insertMany([
      {
        title: 'Test product 2',
        description: 'Test description 2',
        price: 123,
        url: 'test.ru',
        images: [{ url: 'image.ru', alt: 'test img' }],
        specifications: { 'test key': 'test value' },
        producer,
        category,
        tags: [tag]
      },
      {
        title: 'Test product 3',
        description: 'Test description 3',
        price: 123,
        url: 'test.ru',
        images: [{ url: 'image.ru', alt: 'test img' }],
        specifications: { 'test key': 'test value' },
        producer,
        category,
        tags: [tag]
      }
    ]);

    await product.save();
    await category.save();
    await producer.save();
    await tag.save();

    await Category.insertMany([
      { title: 'Test category 2' },
      { title: 'Test category 3' }
    ]);

    await Producer.insertMany([
      { name: 'Test producer 2', url: 'test2.ru' },
      { name: 'Test producer 3', url: 'test3.ru' }
    ]);

    await Tag.insertMany([{ title: 'Test tag 2' }, { title: 'Test tag 3' }]);
  } catch (err) {
    console.error(err.message);
  }
};

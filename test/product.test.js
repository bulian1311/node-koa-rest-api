const { app } = require('../src/index');
const expect = require('expect');
const supertest = require('supertest');

const fakeData = require('./fakeData');
const request = supertest(app.callback());
const Product = require('../src/models/product');

describe('Products', () => {
  beforeEach(fakeData);

  describe('GET /product/list', () => {
    it('Должно вернуть список всех продуктов', done => {
      request
        .get('/product/list')
        .expect(200)
        .end((err, res) => {
          if (err) done(err);
          expect(res.body.length).toBe(3);
          done();
        });
    });
  });

  describe('GET /product/list/:count', () => {
    it('Должно вернуть нужное колличество продуктов', done => {
      request
        .get('/product/list/2')
        .expect(200)
        .end((err, res) => {
          if (err) done(err);
          expect(res.body.length).toBe(2);
          done();
        });
    });
  });

  describe('GET /product/:id', () => {
    it('Должно вернуть один продукт по id', done => {
      Product.findOne({ title: 'Test product 1' })
        .then(product => {
          request
            .get(`/product/${product._id}`)
            .expect(200)
            .end((err, res) => {
              if (err) done(err);
              expect(res.body._id + '').toBe(product._id + '');
              done();
            });
        })
        .catch(err => {
          done(err);
        });
    });
  });
});

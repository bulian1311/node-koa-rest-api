const { app } = require('../src/index');
const expect = require('expect');
const supertest = require('supertest');

const fakeData = require('./fakeData');
const request = supertest(app.callback());

const Category = require('../src/models/category');

describe('Categories', () => {
  beforeEach(fakeData);

  describe('GET /category/list', () => {
    it('Должно вернуть все категории', done => {
      request
        .get('/category/list')
        .expect(200)
        .end((err, res) => {
          if (err) done(err);
          expect(res.body.length).toBe(3);
          done();
        });
    });
  });

  describe('GET /category/:id', () => {
    it('Должно вернуть одну категорию по id', done => {
      Category.findOne({ title: 'Test category 1' })
        .then(category => {
          request
            .get(`/category/${category._id}`)
            .expect(200)
            .end((err, res) => {
              if (err) done(err);
              expect(res.body._id + '').toBe(category._id + '');
              done();
            });
        })
        .catch(err => done(err));
    });
  });
});

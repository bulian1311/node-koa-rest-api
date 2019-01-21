const { app } = require('../src/index');
const expect = require('expect');
const supertest = require('supertest');

const fakeData = require('./fakeData');
const request = supertest(app.callback());

const Tag = require('../src/models/tag');

describe('Categories', () => {
  beforeEach(fakeData);

  describe('GET /tag/list', () => {
    it('Должно вернуть список всех тегов', done => {
      request
        .get('/tag/list')
        .expect(200)
        .end((err, res) => {
          if (err) done(err);
          expect(res.body.length).toBe(3);
          done();
        });
    });
  });

  describe('GET /tag/:id', () => {
    it('Должно вернуть один тег по id', done => {
      Tag.findOne({ title: 'Test tag 1' })
        .then(tag => {
          request
            .get(`/tag/${tag._id}`)
            .expect(200)
            .end((err, res) => {
              if (err) done(err);
              expect(res.body._id + '').toBe(tag._id + '');
              done();
            });
        })
        .catch(err => done(err));
    });
  });
});

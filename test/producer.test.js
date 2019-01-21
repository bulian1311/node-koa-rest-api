const { app } = require('../src/index');
const expect = require('expect');
const supertest = require('supertest');

const fakeData = require('./fakeData');
const request = supertest(app.callback());

const Producer = require('../src/models/producer');

describe('Producers', () => {
  beforeEach(fakeData);

  describe('GET /producer/list', () => {
    it('Должно вернуть список всех поставщиков', done => {
      request
        .get('/producer/list')
        .expect(200)
        .end((err, res) => {
          if (err) done(err);

          expect(res.body.length).toBe(3);
          done();
        });
    });
  });

  describe('GET /producer/:id', () => {
    it('Должно вернуть одного поставщика по id', done => {
      Producer.findOne({ name: 'Test producer 1' })
        .then(producer => {
          request
            .get(`/producer/${producer._id}`)
            .expect(200)
            .end((err, res) => {
              if (err) done(err);
              expect(res.body._id + '').toBe(producer._id + '');
              done();
            });
        })
        .catch(err => done(err));
    });
  });
});

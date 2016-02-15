'use strict';

let should = require('should');

let assert = require('assert');

let request = require('supertest');

const API_BASE = 'http://localhost:8080/api/v1';

describe('GET /complaints', () => {

  it('respond with json', (done) => {
    request(API_BASE)
      .get('/complaints')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('respond with 9 complaints', (done) => {
    request(API_BASE)
      .get('/complaints')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {

        if (err) return done(err);

        res.body.complaints.should.not.equal(null);

        res.body.complaints.length.should.equal(9);

        done();
      });
  });

  it('respond with 6 complaints when limit = 6', (done) => {
    request(API_BASE)
      .get('/complaints?limit=6')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {

        if (err) return done(err);

        res.body.complaints.should.not.equal(null);

        res.body.complaints.length.should.equal(6);

        done();
      });
  });

  it('respond with 2 complaints when limit = 2 and skip is not null', (done) => {
    request(API_BASE)
      .get('/complaints?skip2&limit=6')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {

        if (err) return done(err);

        res.body.complaints.should.not.equal(null);

        res.body.complaints.length.should.equal(6);

        done();
      });
  });

  it('respond with 1 complaint', (done) => {
    request(API_BASE)
      .get('/complaints/2')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {

        if (err) return done(err);

        res.body.should.not.equal(null);

        res.body.should.be.ok();

        done();
      });
  });

  it('respond with 0 complaint', (done) => {
    request(API_BASE)
      .get('/complaints/50')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {

        if (err) return done(err);

        res.body.should.eql({});

        res.body.should.be.ok();

        done();
      });
  });
});

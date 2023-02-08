'use strict';

const { expect } = require('chai');
const app = require('./../app');
const request = require('supertest');

describe('Organization API Integration Tests', () => {


    describe('#GET / ', () => {

        it('should give 200 as status', (done) => {

            request(app).get(`/home`)
                .then((res) => {
                    expect(res.statusCode).to.equal(200);
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
    });
});
'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.server);

describe('validator test', ()=>{
  it('name does not exist', async ()=>{
    const response = await request.get('/person');
    expect(response.status).toBe(500);
  });
  it('name exist', async ()=>{
    const response = await request.get('/person?name=fred');
    expect(response.status).toBe(200);
    expect(response.text).toBe('{"name":"fred"}');
  });
});

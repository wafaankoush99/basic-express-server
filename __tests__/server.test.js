
'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('test server', ()=>{
  it('should get home route', async()=>{
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('welcome to the server');
  });
  it('should get 404 status', async ()=>{
    const response = await request.get('/bad');
    expect(response.status).toBe(404);
  });
  it('should get status 500', async ()=>{
    const response = await request.get('/foo');
    expect(response.status).toBe(500);
  });
});
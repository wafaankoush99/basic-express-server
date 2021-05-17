'use strict';

// const server = require('../src/server');
// const supertest = require('supertest');
const logger = require('../src/middleware/logger');
// const request = supertest(server.app);

describe('logger middleware', ()=>{
  let consoleSpy;
  const req = {method: 'get', path: 'test'};
  const res = {};
  const next = jest.fn();
  beforeEach(()=>{
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
  });
  afterEach(()=>{
    consoleSpy.mockRestore();
  });
  it('should log all get requests', ()=>{
    // arrange act assert
    logger(req,res,next);
    expect(consoleSpy).toHaveBeenCalledWith('request info', 'get', 'test');
    expect(next).toHaveBeenCalledWith();
  });
});





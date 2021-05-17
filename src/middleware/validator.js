'use strict';

// const app = require('../server');

function square(req, res, next) {
//   return (req, res, next) => {
  if (req.query.name) {
    next();
  }
  else {
    // req.name = nameProp;
    next('not found');
  }
//   };
}



module.exports=square;


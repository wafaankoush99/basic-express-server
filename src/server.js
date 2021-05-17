// 'use strict';

// const express = require('express');
// const app = express();

// const errorHandler = require('./error-handlers/500.js');
// const notFoundHandler = require('./error-handlers/404.js');

// const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');

// app.use(express.json());
// app.use(logger);


// // {name: "fred" }
// app.get('/person', (req, res) => {
//   app.use(express.json());
//   res.json({name: 'fred' });
// });
// // app.get('/test', (req, res) => {
// //   const output = {
// //     name: req.query.name,
// //   };
// //   res.json(output);
// // });

// app.use('*', notFoundHandler);
// app.use(errorHandler);

// function start(PORT) {
//   app.listen(PORT, ()=>{
//     console.log(`Up To PORT ${PORT}`);
//   });
// }

// module.exports = {
//   app: app,
//   start: start,
// };

'use strict';


const express = require('express');
const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');
const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');
const server = express();
let square = require('./middleware/validator');
server.use(logger);
// server.use(validator);

server.get('/', (req,res)=>{
  res.send('welcome to the server');
});



server.get('/wrong', (req,res)=>{
  throw new Error('page not found');
});

server.get('/person', square, (req, res) => {
  res.json({
    name: req.query.name,
  });
});

server.use('/wrong', errorHandler);
server.use('*', notFoundHandler);


function startServer(PORT) {
  server.listen(PORT, () => {
    console.log(`Up TO PORT ${PORT}`);
  });
}


module.exports = {
  server: server,
  startServer: startServer,
};



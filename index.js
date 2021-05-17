// 'use strict';

// const { app } = require('./src/server');
// // const server = require('./src/server');
// require('dotenv').config();
// const PORT = process.env.PORT || 3000;

// app.start(PORT);

// // server.start(PORT);
'use strict';

const server = require('./src/server.js');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

server.startServer(PORT);
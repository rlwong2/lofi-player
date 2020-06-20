const app = require('./index.js');

const port = process.env.NODE_ENV === 'test' ? 3000 : 8888;

const server = app.listen(port, () => {console.log(`lo-fi beats on ${port}`)});

module.exports = server;
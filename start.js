const app = require('./index.js');

const port = process.env.NODE_ENV === 'test' ? 8888 : 3000;

app.listen(port, () => {console.log(`lo-fi beats on ${port}`)});
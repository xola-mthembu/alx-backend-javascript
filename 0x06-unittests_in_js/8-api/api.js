const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

function startServer() {
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.log(`API available on localhost port ${port}`);
      resolve(server);
    });
  });
}

module.exports = { app, startServer };

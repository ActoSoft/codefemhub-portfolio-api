const express = require('express');
const portfoliosMock = require('./portfolio-mock');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/portfolios', (req, res) => {
  if (portfoliosMock.length === 0) {
    return res.status(204).json(portfoliosMock);
  }
  return res.status(200).json(portfoliosMock);
});

app.listen(8085, () => {
  console.log('Server running in port 8085');
} /*callback*/);
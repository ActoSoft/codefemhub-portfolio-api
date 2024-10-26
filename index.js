const express = require('express');
const portfoliosMock = require('./portfolio-mock');
const portfolioMock = require('./portfolio-mock');

const app = express();

// Allow JSON request body
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test' })
})

app.get('/portfolios', (req, res) => {
  // Validation
  if (portfoliosMock.length === 0) {
    return res.status(204).json(portfoliosMock);
  }
  return res.status(200).json(portfoliosMock);
});

app.post('/portfolios', (req, res) => {
  const data = req.body;

  // TODO: Implement validations

  // calculate id
  const lastIndex = portfoliosMock.length - 1;
  const lastPortfolio = portfoliosMock[lastIndex];
  const newId = lastPortfolio.id + 1;

  data.id = newId;
  data.status = 'draft';
  data.active = true;
  data.noVisits = 0;
  data.createdAt = new Date();
  data.updatedAt = new Date();

  portfoliosMock.push(data);
  return res.status(201).json(data);
});

app.put('/portfolios/:id', (req, res) => {
  const data = req.body;
  const id = Number(req.params.id);

  const portfolioIndex = portfolioMock.findIndex((portfolio) => {
    return portfolio.id === id;
  });

  if (portfolioIndex === -1) {
    return res.status(404).json({
      message: 'El portafolio no existe. ID:', id
    });
  }

  // TODO: Implement validations

  const porfolio = portfoliosMock[portfolioIndex];
  // Mutable
  // Object.assign(porfolio, data);
  // Inmutable
  const updatedPortfolio = { ...porfolio, ...data };
  updatedPortfolio.updatedAt = new Date();
  portfoliosMock.splice(portfolioIndex, 1, updatedPortfolio);

  return res.status(200).json(updatedPortfolio);
});

app.delete('/portfolios/:id', (req, res) => {
  const id = Number(req.params.id);

  const portfolioIndex = portfolioMock.findIndex((portfolio) => {
    return portfolio.id === id;
  });

  if (portfolioIndex === -1) {
    return res.status(404).json({
      message: 'El portafolio no existe. ID:', id
    });
  }

  portfoliosMock.splice(portfolioIndex, 1);

  return res.status(200).json({
    message: `El portafolio ${id} ha sido eliminado`,
  });
});

app.listen(8085, () => {
  console.log('Server running in port 8085');
} /*callback*/);
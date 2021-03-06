const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.locals.breads = [
  {
    id: 1,
    type: 'sourdough',
  },
  {
    id: 2,
    type: 'rye',
  },
];

app.get('/api/v1/breads', (request, response) => {
  response.status(200).json(app.locals.breads);
});

app.listen(app.get('port'), () => {
  console.log(`App running on port ${app.get('port')}`);
});

module.exports = app;
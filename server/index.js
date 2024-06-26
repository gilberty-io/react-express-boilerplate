const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');

const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
];

const app = express();
app.use(bodyParser.json());

app.use(express.static('dist'));

// Send the username of the os user
app.get('/api/products', (req, res) => {
  res.send(products)
});

// Send a 404 error if request starts by '/api/' but route doesn't exist
app.use('/api/*', (req, res) => { throw createError(404, "Page Not Found") });

// Always send index.html for the requests not starting by '/api/'
app.use((req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// New GET /cart/:id route
app.get('/cart/:id(\\d+)', (req, res) => {  // Regex ensures :id is a number
    const cartId = req.params.id;
    res.send(`Payment methods for cart: ${cartId}`);
});

// If id is not a number, send 404
app.get('/cart/*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;

// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'pug');

// Set location for static files
app.use(express.static('public'));

// Get home page
app.get('/', (req, res) => {
  res.render('index');
});

// Get comments page
app.get('/comments', (req, res) => {
  const name = req.query.name;
  const comment = req.query.comment;
  res.render('comments', { name: name, comment: comment });
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
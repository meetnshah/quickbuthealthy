const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample GET route
app.get('/', (req, res) => {
  res.send('Welcome to Quick But Healthy Server!');
});

// More routes here
// e.g., app.get('/api/menu', (req, res) => { ... });

// Basic 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

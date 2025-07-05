// Create variables
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Import Api routes

const authRoutes = require('./routes/auth');

app.use(express.json()); // JSON Parsing
app.use(express.static(path.join(__dirname, 'public'))); // serve Static files from public folder

app.use('/api', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Website running at http://localhost:${port}`);
});
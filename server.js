// Create variables
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Import Api routes
const authRoutes = require('./routes/auth');
const flashcardRoutes = require('./routes/flashcards');
//const quizRoutes = require('./routes/quizzes'); // Unimplemented

app.use(express.json()); // JSON Parsing
app.use(express.static(path.join(__dirname, 'public'))); // serve Static files from public folder



// Establish Routes
app.use('/api', authRoutes);
app.use('/api', flashcardRoutes);
//app.use('/api', quizRoutes); Unimplemented


// Default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Launch Server
app.listen(port, () => {
  console.log(`Website running at http://localhost:${port}`);
});
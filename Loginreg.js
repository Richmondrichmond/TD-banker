const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle registration form submission
app.post('/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Process the data (e.g., save to a database)
  console.log('Client Details:', { firstName, lastName, email });

  // Send a response
  res.send('Registration successful!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

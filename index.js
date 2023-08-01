const bodyParser = require('body-parser');
const express = require('express');
const router = require('./routes/book.routes');
require('dotenv').config();
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT;

// Body parser middleware
app.use(bodyParser.json());                                                                                                                                                                                                                                                                                                                         
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to database
connectDB();

// Route to book API
app.use('/', router);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./config/dbConnection');

const taskRoutes = require('./routes/taskRoutes');  // Import task routes
const userRoutes = require('./routes/userRoutes');  // Import user routes

const app = express();

app.use(cors()); // Enable CORS for all origins (you can configure if needed)
app.use(express.json()); // Parse JSON request bodies
app.use(morgan('dev')); // HTTP request logger
connectDB(); 
// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend Connected Successfully!' });
});

// Mount routes with prefix for better API organization
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Handle 404 errors for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handling middleware for unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

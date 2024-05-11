
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const activityRoutes = require('./src/routes/activities');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/activities', activityRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

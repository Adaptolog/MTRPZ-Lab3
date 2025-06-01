const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);
app.use(express.static('public'));

mongoose.connect('mongodb://mongo:27017/space-facts', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
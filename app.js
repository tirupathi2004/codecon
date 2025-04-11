const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const bepoRoutes = require('./routes/bepoRoutes');
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/bepo', bepoRoutes);
module.exports = app;
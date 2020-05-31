const express = require('express');
const app = express.Router();
const userRoutes = require('../routes/userRoutes');
const authRoutes = require('../routes/authRoutes');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

module.exports = app;

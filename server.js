// Bring in pkg requires
const express = require('express');
const { join } = require('path');
const app = express();

// Middleware
app.use(express.static(join(__dirname, './public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes 
const routes = require('./app/routing/htmlRoutes')(app)

// Listen port
app.listen(3000)
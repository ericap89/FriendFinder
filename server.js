// Bring in pkg requires
const express = require('express');

// var path = require("path");
const app = express();

// Middleware
app.use(express.static(__dirname + "public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes 
require('./app/routing/htmlRoutes.js')(app);



// Listen port search env first 
const PORT = process.env.PORT || 3000
// console log response in terminal 
app.listen(PORT, () => console.log(`Server loaded on port: ${PORT}`))
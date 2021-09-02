// Calling our dependencies
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

// Connection to our database
// const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( {path : 'config.env'})
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'))

// MongoDB connection
// connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({extended : true}))

// Set views engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"))

// Loading static assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// Loading the router
app.use('/', require('./server/routes/router'))

// The Final Countdown
app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)})
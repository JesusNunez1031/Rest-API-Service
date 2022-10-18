const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./global/config');
const port = process.env.PORT || config.port;

const app = express();

// Routes
const ipRoute = require('./routes/ip');
const pingRoute = require('./routes/ping');

// Middleware
app.use(morgan('[:date[web]] :method :url :status :res[content-length] - :response-time ms')); // request log
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add route to app
ipRoute(app);
pingRoute(app);

app.listen(port, (error) => {
    if (error) console.error(error);
    console.log(`Server running: ${port}`);
});
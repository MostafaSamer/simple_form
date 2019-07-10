const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

// POST req
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Access Api
app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
}));
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

// Routers
var routers = require('./router/index');
app.use('/', routers);

// Port
app.listen(3000, ()=> {
    console.log("App is on port 3000");
})

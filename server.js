const express = require('express');
const dotenv = require('dotenv').config()
const bodyParser = require("body-parser");
const cros = require('cors');

const app = express();

var crosOptions = {
    origin : "http://localhost:8081"
};

app.use(cros(crosOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/',(req,res) => {
    res.json({message: "welcome to this demo crud"})
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is started at port ${post}`);
})






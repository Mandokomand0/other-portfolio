var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./controllers/portfolio_controller.js");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Import routes and give the server access to them.
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use("/", routes);

app.listen(port);
console.log(port);

var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./controllers/portfolio_controller.js");
var ejs = require('ejs');
var fs = require("fs");
// var myFileLoad = function (filePath) {
//   return 'myFileLoad: ' + fs.readFileSync("index.HTML");
// };
//
// ejs.fileLoader = myFileLoad;
// var template = ejs.compile(str, options);
// template(data);
// // => Rendered HTML string
//
// ejs.render(str, data, options);
// // => Rendered HTML string
//
// ejs.renderFile(filename, data, options, function(err, str){
//     // str => Rendered HTML string
// });
var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Import routes and give the server access to them.
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var routes = require("./controllers/portfolio_controller.js");
app.use("/", routes);

app.listen(port);
console.log(port);

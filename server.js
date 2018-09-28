var express = require('express');
var bodyParser=require('body-parser');
//var exphbs = require('express-handlebars');
//var routes=require('./routes');
var db = require('./models');
var PORT = process.env.PORT || 8080;
var app = express();

// process.env.PORT ||

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('views/images')); 
app.use(express.static('views/sounds')); 
//app.engine('handlebars',exphbs({defaultLayout:'main'}));
//app.set('view engine', 'handlebars');


 

require("./routes/post-api-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/subject-api-routes.js")(app);
require("./routes/comments-api-routes.js")(app);
require("./routes/html-routes.js")(app);
// app.use('./routes');

db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function(){
        console.log("server listening on: https://localhost:"+PORT);
    });
});

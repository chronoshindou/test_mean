//app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const post = require('./routes/post.route'); // Imports routes for the post
const app = express();

const cors = require('cors')
let port = 3000;
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
    
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://test_user:asd123@ds127545.mlab.com:27545/test_';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Set views
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/products', product);
app.use('/post', post);

app.use(cors(corsOptions))

app.get('/person', function(req, res){
    res.render('person');
 });

//  app.get('/dynamic_view', function(req, res){
//     res.render('dynamic', {
//        name: "TutorialsPoint", 
//        url:"http://www.tutorialspoint.com",
//        content: "Test content here"
//     });
//  });


app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

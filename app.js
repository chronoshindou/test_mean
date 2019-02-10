//app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const post = require('./routes/post.route'); // Imports routes for the post
const app = express();

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
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/post', post);


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

let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

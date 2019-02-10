var express = require('Express');
var app = express();

var things = require('./things.js');
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
app.use(express.static('images'));
/*
app.get('/hello', function(req, res){
   res.send("Hello world!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function(req, res){
   res.send("HTTP method doesn't have any effect on this route!");
});
*/

app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('The id you specified : ' + req.params.id);
});

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
app.get('/first_template', function(req, res){
   res.render('first_view');
});
app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "TutorialsPoint", 
      url:"http://www.tutorialspoint.com",
      content: "Test content here"
   });
});

app.get('/login', function(req,res){
   res.render('login', {
      // user: {name: "Chrono", age: "32"}
   })
});

app.get('/components', function(req, res){
   res.render('./shared/content');
});

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});
app.use('/things', things);


/************************* *
//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});


app.use('/', function(req, res){
   console.log('End');
});
********************************/


app.listen(3000);

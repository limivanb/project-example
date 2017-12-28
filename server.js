const express = require('express');
const hbs = require('hbs')

var port = 4000;

var app = express();

// app.use((req, res, next) => {
//   console.log('hello app');
//
//   next();
// });

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  // res.send('<h1>Home Page</h1>');

  res.render('home.hbs',{
    message: 'Node.js Training',
    pageTitle: 'JBLFMU Home Page',
    currentDate: new Date().toDateString(),
    currentYear: new Date().getFullYear()
  });

})

app.get('/about', function (req, res) {
  res.render('about.hbs',{
    pageTitle: 'About Page'
  });
})


app.listen(port, () => {
  console.log('Server is listening to port',port);
});

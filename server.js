var express = require('express')
var app = express()
var bodyParser = require('body-parser')

const Foods = require('./lib/controllers/foods')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Quantified Self API'

// root page
app.get('/', function(request, response) {
  response.send(app.locals.title)
})

// foods index (all foods)
app.get('/api/v1/foods', Foods.index)

// foods show (individual food)
app.get('/api/v1/foods/:id', Foods.show)

// foods create
app.post('/api/v1/foods', Foods.create)

// foods destroy
app.del('/api/v1/foods/:id', Foods.destroy)

if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

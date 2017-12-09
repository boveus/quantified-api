var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Quantified Self API'
app.locals.foods = [{"id":1,"name":"Banananana","calories":19},
{"id":2,"name":"Cheeze Whiz","calories":285},
{"id":3,"name":"Granola Bar","calories":200},
{"id":4,"name":"cooler food","calories":1235},
{"id":5,"name":"GOAT Burrito","calories":10},
{"id":6,"name":"Bites - Four Bacons ","calories":650},
{"id":7,"name":"Dan Sandwich","calories":2360},
{"id":8,"name":"Banh Mimi","calories":342},
{"id":9,"name":"cool beanz","calories":456},
{"id":10,"name":"Cheese Curds","calories":600},
{"id":11,"name":"apples and oranges","calories":129}]

app.get('/', function(request, response) {
  response.send(app.locals.title)
})

app.get('/api/foods', function(request, response) {
  var notFoods = app.locals.foods

  response.json( notFoods )
})

app.get('/api/foods/:id', function(request, response) {
  var id = request.params.id
  var message = app.locals.foods[id]

  if (!message) { return response.sendStatus(404)  }

  response.json( id )
})

if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

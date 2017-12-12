var express = require('express')
var app = express()
var bodyParser = require('body-parser')

const Food = require('./lib/models/food')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Quantified Self API'


app.get('/', function(request, response) {
  response.send(app.locals.title)
})

app.get('/api/v1/foods', function(request, response) { Food.index(response) } )

app.get('/api/v1/foods/:id', function(request, response) {
  database.raw('SELECT * FROM foods WHERE id = (?)', [request.params.id])
    .then((data) => {
      if (!data.rows[0]) {
        return response.sendStatus(404)
      } else {
        response.json( data.rows )
      }
    })
})

if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

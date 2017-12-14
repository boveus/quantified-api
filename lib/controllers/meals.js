const pry = require('pryjs')
const Meal = require('../models/meal')

const index = (request, response, next) => {
  Meal.all()
    .then( (data) => {
      eval(pry.it)
      response.json( data.rows )
    }).catch( (error) => {
      eval(pry.it)
      return response.sendStatus(500)
    })    
}

module.exports = {
  index
}
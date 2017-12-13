const Meal = require('../models/meal')

const index = (request, response, next) => {
  Meal.all()
    .then( (data) => {
      response.json( data.rows )
    }).catch( (error) => {
      return response.sendStatus(500)
    })    
}

module.exports = {
  index
}
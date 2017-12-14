const pry = require('pryjs')
const MealFood = require('../models/meal-food')

const index = (request, response, next) => {
  let id = request.params.meal_id
  MealFood.all(id)
    .then( (data) => {
      eval(pry.it)
      response.json(data.rows[0])
    })
}

module.exports = {
  index
}
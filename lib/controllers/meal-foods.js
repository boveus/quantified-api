const pry = require('pryjs')
const MealFood = require('../models/meal-food')

const index = (request, response, next) => {
  let id = request.params.meal_id
  MealFood.all(id)
    .then( (data) => {
      response.json(data.rows[0])
    })
}

const create = (request, response, next) => {
  let mealId = request.params.meal_id
  let foodId = request.params.id
  MealFood.addFood(mealId, foodId)
    .then( (data) => {
      if(data.rowCount === 0) { return response.sendStatus(404) }
      response.sendStatus(201)
    }).catch( (error) => {
      return response.sendStatus(404)
    })
}

module.exports = {
  index,
  create
}
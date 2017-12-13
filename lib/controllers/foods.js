const pry = require('pryjs')
const Food = require('../models/food')

const index = (request, response, next) => {
  Food.getAllFoods()
    .then( (data) => {
      response.json( data.rows )
    })
}

const show = (request, response, next) => {
  let id = request.params.id
  Food.getSingleFood(id)
    .then( (data) => {
      if (!data.rows[0]) { return response.sendStatus(404) }
      response.json(data.rows)
    })
}

const create = (request, response, next) => {
  let name = request.body.food.name
  let calories = request.body.food.calories

  if(!name || !calories) { return response.sendStatus(400) }

  Food.createFood(name, calories)
    .then( (data) => {
      if (!data.rows[0]) {return response.sendStatus(400) }
      response.json(data.rows)
    })
}

module.exports = {
  index,
  show,
  create
}
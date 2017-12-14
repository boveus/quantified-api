const pry = require('pryjs')
const Food = require('../models/food')

const index = (request, response, next) => {
  Food.getAllFoods()
    .then( (data) => {
      response.json( data.rows )
    }).catch( (error) => {
      return response.sendStatus(500)
    })    
}

const show = (request, response, next) => {
  let id = request.params.id
  Food.getSingleFood(id)
    .then( (data) => {
      if (!data.rows[0]) { return response.sendStatus(404) }
      response.json(data.rows)
    }).catch( (error) => {
      return response.sendStatus(500)
      // return response.sendStatus(422)
    })
}

const create = (request, response, next) => {
  let name = request.body.food.name
  let calories = request.body.food.calories

  if(!name || !calories) { return response.sendStatus(422) }

  Food.createFood(name, calories)
    .then( (data) => {
      if (!data.rows[0]) { return response.sendStatus(400) }
      response.sendStatus(201).json(data.rows)
    }).catch( (error) => {
      return response.sendStatus(500)
    })
}

const destroy = (request, response, next) => {
  let id = request.params.id
  Food.deleteFood(id)
    .then( (data) => {
      if (data === 0) { return response.sendStatus(404) }
      response.sendStatus(200)
    }).catch( (error) => {
      return response.sendStatus(500)
      // return response.sendStatus(409)
    })
}

module.exports = {
  index,
  show,
  create,
  destroy
}
const Food = require('../models/food')

const index = (request, response, next) => {
  Food.all()
    .then( (data) => {
      response.json( data.rows )
    }).catch( (error) => {
      return response.sendStatus(500)
    })    
}

const show = (request, response, next) => {
  let id = request.params.id
  Food.find(id)
    .then( (data) => {
      if (!data.rows[0]) { return response.sendStatus(404) }
      response.json(data.rows[0])
    }).catch( (error) => {
      return response.sendStatus(500)
      // return response.sendStatus(422)
    })
}

const create = (request, response, next) => {
  let name = request.body.food.name
  let calories = request.body.food.calories

  if(!name || !calories) { return response.sendStatus(422) }

  Food.addRow(name, calories)
    .then( (data) => {
      if (!data.rows[0]) { return response.sendStatus(400) }
      response.json(data.rows[0])
    }).catch( (error) => {
      return response.sendStatus(500)
    })
}

const edit = (request, response, next) => {
  let id = request.params.id
  let name = request.body.food.name
  let calories = request.body.food.calories

  Food.update(id, name, calories)
    .then( (data) => {
      if(!data[0]) { return response.sendStatus(404) }
      response.json(data[0])
    }).catch( (error) => {
      return response.sendStatus(500)
    })
}

const destroy = (request, response, next) => {
  let id = request.params.id
  Food.removeRow(id)
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
  edit,
  destroy
}
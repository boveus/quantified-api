const Food = require('../models/food')

const index = (request, response, next) => {
  Food.getAllFoods()
    .then( (data) => {
      response.json( data.rows )
    })
}

module.exports = {
  index
}
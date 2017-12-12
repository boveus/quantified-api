const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

const index = (response) => {
  database.raw('SELECT * FROM foods')
    .then((data) => {
      response.json( data.rows ) 
    })
}

module.exports = {
  index
}
const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

const all = () => {
  return database.raw('SELECT * FROM meals')
}

module.exports = {
  all
}
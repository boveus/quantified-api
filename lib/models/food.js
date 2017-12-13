const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

const getAllFoods = () => {
  return database.raw('SELECT * FROM foods')
}

const getSingleFood = (id) => {
  return database.raw(`SELECT * FROM foods WHERE id = (?)`, [id])
}

const createFood = (name, calories) => {
  return database.raw('INSERT INTO foods (name, calories) VALUES (?, ?) RETURNING id, name, calories', [name, calories])
}

const deleteFood = (id) => {
  return database('foods').where('id', id).del()
}

module.exports = {
  getAllFoods,
  getSingleFood,
  createFood,
  deleteFood
}
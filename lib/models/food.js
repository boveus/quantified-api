const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

const all = () => {
  return database.raw('SELECT * FROM foods')
}

const find = (id) => {
  return database.raw(`SELECT * FROM foods WHERE id = (?)`, [id])
}

const addRow = (name, calories) => {
  return database.raw('INSERT INTO foods (name, calories) VALUES (?, ?) RETURNING id, name, calories', [name, calories])
}

const update = (id, newName, newCalories) => {
  return database('foods')
    .where('id', id)
    .update({name: newName, calories: newCalories}, ['id', 'name', 'calories'])
}

const removeRow = (id) => {
  return database('foods').where('id', id).del()
}

module.exports = {
  all,
  find,
  addRow,
  update,
  removeRow
}
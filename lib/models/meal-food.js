const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

const all = (id) => {
  return database.raw(`SELECT meals.*, json_agg(foods) AS foods 
    FROM meals 
    FULL OUTER JOIN mealfoods 
    ON meals.id = mealfoods.meal_id 
    FULL OUTER JOIN foods
    ON mealfoods.food_id = foods.id
    WHERE meals.id = (?)
    GROUP BY meals.id`, [id])
}

const addRow = (mealId, foodId) => {
  return database('mealfoods')
    .insert({meal_id: mealId, food_id: foodId})
}

const removeRow = (mealId, foodId) => {
  rowId = database('mealfoods').select('id')
    .where({meal_id: mealId, food_id: foodId}).limit(1)
  return database('mealfoods').where('id', rowId).del()
}

module.exports = {
  addRow,
  removeRow,
  all
}
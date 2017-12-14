const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

const all = () => {
  return database.raw(`SELECT meals.*, json_agg(foods) AS foods 
    FROM meals 
    FULL OUTER JOIN mealfoods 
    ON meals.id = mealfoods.meal_id 
    FULL OUTER JOIN foods 
    ON mealfoods.food_id = foods.id
    GROUP BY meals.id
    ORDER BY meals.id`)
}


module.exports = {
  all
}
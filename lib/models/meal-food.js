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

module.exports = {
  all
}

    // .from('foods')
    // .select('foods.id', 'foods.name', 'foods.calories', 'meals.name', 'meals.id')
    // .innerJoin('mealfoods', 'foods.id', 'mealfoods.food_id')
    // .innerJoin('meals', 'meals.id', 'mealfoods.meal_id')
    // .where('meal_id', id)

        // .select(['meals.*', 'foods.*'])
    // .as('foods')
    // .from('meals', function() {
    //   this.innerJoin('mealfoods', function() {
    //     this.on('meals.id', '=', 'mealfoods.meal_id')
    //   }).innerJoin('foods', function() {
    //     this.on('mealfoods.food_id', '=', 'foods.id')
    //   }).where('meals.id', id).groupBy('meals.id')
    // })
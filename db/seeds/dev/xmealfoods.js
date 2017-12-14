
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mealfoods').del()
    .then(function () {
      // Inserts seed entries
      return knex('mealfoods').insert([
        // {id: 1, meal_id: 1, food_id: 1},
        // {id: 4, meal_id: 1, food_id: 2},
        // {id: 5, meal_id: 3, food_id: 1},
        // {id: 2, meal_id: 2, food_id: 2},
        // {id: 3, meal_id: 4, food_id: 3}
        {meal_id: 1, food_id: 1},
        {meal_id: 1, food_id: 2},
        {meal_id: 3, food_id: 1},
        {meal_id: 2, food_id: 2},
        {meal_id: 4, food_id: 3}
      ])
    })
}

// select * from meals inner join mealfoods ON meal_id = meals.id inner join foods ON food_id = foods.id;

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('meals', (table) => {
      table.increments('id').primary();
      table.string('name');
    }),
    knex.schema.createTable('foods', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('calories');
    }),
    knex.schema.createTable('mealfood', (table) => {
      table.increments('id').primary();
      table.integer('food_id').unsigned().references('foods.id');
      table.integer('meal_id').unsigned().references('meals.id');
      })
    ])
}
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('mealfood'),
    knex.schema.dropTable('meals'),
    knex.schema.dropTable('foods')
  ])
}

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
    knex.schema.createTable('mealfoods', (table) => {
      table.increments('id').primary();
      table.integer('food_id').unsigned().references('id').inTable('foods');
      table.integer('meal_id').unsigned().index().references('id').inTable('meals');
      })
    ])
}
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('mealfoods'),
    knex.schema.dropTable('meals'),
    knex.schema.dropTable('foods')
  ])
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {name: 'Breakfast'},
        {name: 'Snack'},
        {name: 'Lunch'},
        {name: 'Dinner'}
      ])
    })
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {id: 1, name: 'Breakfast'},
        {id: 2, name: 'Snack'},
        {id: 3, name: 'Lunch'},
        {id: 4, name: 'Dinner'}
      ])
    })
}

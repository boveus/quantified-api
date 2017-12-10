
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'Carrots', calories: 50},
        {id: 2, name: 'Grapes', calories: 50},
        {id: 3, name: 'Fritos', calories: 50}
      ])
    })
}

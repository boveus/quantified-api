
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {"name":"Banananana","calories":19},
        {"name":"Cheeze Whiz","calories":285},
        {"name":"Granola Bar","calories":200},
        {"name":"cooler food","calories":1235},
        {"name":"GOAT Burrito","calories":10},
        {"name":"Bites - Four Bacons ","calories":650},
        {"name":"Dan Sandwich","calories":2360},
        {"name":"Banh Mimi","calories":342},
        {"name":"cool beanz","calories":456},
        {"name":"Cheese Curds","calories":600},
        {"name":"apples and oranges","calories":129}])
    })
}

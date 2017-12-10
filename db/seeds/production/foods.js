
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {"id":1,"name":"Banananana","calories":19},
        {"id":195,"name":"Cheeze Whiz","calories":285},
        {"id":8,"name":"Granola Bar","calories":200},
        {"id":189,"name":"cooler food","calories":1235},
        {"id":3,"name":"GOAT Burrito","calories":10},
        {"id":2,"name":"Bites - Four Bacons ","calories":650},
        {"id":194,"name":"Dan Sandwich","calories":2360},
        {"id":200,"name":"Banh Mimi","calories":342},
        {"id":214,"name":"cool beanz","calories":456},
        {"id":10,"name":"Cheese Curds","calories":600},
        {"id":190,"name":"apples and oranges","calories":129}])
    })
}

const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

const getAllFoods = (response) => {
  return database.raw('SELECT * FROM foods')
    // .then((data) => {
    //   responseToJson( data.rows )
    // })
}

const show = (response, id) => {
  database.raw(`SELECT * FROM foods WHERE id = (?)`, [id])
    // .then((data) => {
    //   if (!data.rows[0]) { render404(response) }
    //   responseToJson(response, data)
    // })
}

// const responseToJson = (response, data) => {
//   return response.json( data.rows )
// }

// const render404 = (response) => {
//   response.sendStatus(404)
// }

module.exports = {
  getAllFoods
}
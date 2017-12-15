# quantified-api

## Introduction

This was a joint project between Brandon Stewart and Aaron Hursh. This application is a RESTful API that provides data to a JavaScript/JQuery calorie tracking app, and was built in Express on Node.js using the Knex library to perform SQL queries. This project was completed over the course of two weeks.

## Getting Started

First, download and install [Node.js](https://nodejs.org/en/)

Then do the following:

```
git clone git@github.com:amhursh/quantified-api.git
```

```
cd quantified-api
```

```
npm install
```

To start the server

```
npm start
```

Food Endpoints:


GET /api/v1/foods - returns a JSON of all foods

GET /api/v1/foods/:id - returns a single food item matching the given ID

POST /api/v1/foods - create a new food using the following syntax:

{ food: { name: "Food Name", calories: "1234"} }

PATCH /api/v1/foods/:id - update a single food item matching the given ID, use the following syntax:

{ food: { name: "Name of food here", calories: "Calories here"} }

DELETE /api/v1/foods/:id - will delete the food with the id passed in.


Meal Endpoints:


GET /api/v1/meals - returns all meals with foods assigned to those meals.

GET /api/v1/meals/:meal_id/foods - returns the foods associated with the meal ID given.

POST /api/v1/meals/:meal_id/foods/:id - adds a new food to the specified meal.

DELETE /api/v1/meals/:meal_id/foods/:id - removes the selected food from the specified meal


## Contributing

Clone this repo, submit a pull request, and tag @amhursh (Aaron) or @boveus (Brandon) in the PR.

## Version

This is version 1 of the Quantified API

## Authors

[Aaron Hursh](https://github.com/amhursh)
[Brandon Stewart](https://github.com/amhursh)

## License

This project is licensed under the MIT License

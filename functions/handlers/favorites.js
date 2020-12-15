const {db} = require('./admin');

exports.getFavorites = (req, res) => {
  res.status(200).json({
    books: [{rank: 1, title: 'Failure of Nerve', author: 'Edwin Friedman'}],
    movies: [{rank: 1, title: 'Superman'}],
    food: [{rank: 1, title: 'Donuts'}],
  })
}
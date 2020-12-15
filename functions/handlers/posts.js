const {db} = require('./admin');

exports.getPosts = (req, res) => {
  db.collection('posts')
    .get()
    .then(data => {
      console.log(data)
      res.status(200).json(data)
    })
    .catch(err => console.log(err))
}
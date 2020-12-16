const {db} = require('../admin')
const {unwrap, combine} = require('../utils')

exports.getPosts = (req, res) => {
  db.collection('posts').get()
    .then(raw => unwrap(raw))
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
}

exports.getPost = (req, res) => {
  db.doc(`/posts/${req.params.id}`).get()
    .then(raw => !raw.exists ?
      res.status(404).json({error: 'Post not found'}) :
      res.status(200).json(combine(raw.data(), {id: raw.id}))
    )
    .catch(err => console.log(err))
}

exports.createPost = (req, res) => {
  const {body, title, imageUrl, author = 'Bryant Brock'} = req.body
  const post = {
    body, title, author, imageUrl,
    created: new Date().toISOString(),
    likes: 0
  }

  db.collection('posts').add(post)
    .then(doc => res.status(200).json(combine(post, {id: doc.id})))
    .catch(err => console.log(err))
}

exports.likePost = (req, res) => {
  const incrementLike = likes =>
    db.doc(`/posts/${req.params.id}`).update({likes: likes + 1})
      .then(() => res.status(200).json({success: true}))
      .catch(err => console.log(err))

  db.doc(`/posts/${req.params.id}`).get()
    .then(raw => !raw.exists ?
      res.status(404).json({success: false}) :
      incrementLike(raw.data().likes)
    )
    .catch(err => console.log(err))
}
const functions = require('firebase-functions')
const app = require('express')()
const config = require("./config");
const firebase = require("firebase")
const cors = require('cors')

firebase.initializeApp(config)
app.use(cors())

const {
  getPosts, getPost, createPost,
  likePost,
} = require('./handlers/posts')

// Routes
app.get('/posts', getPosts)
app.get('/posts/:id', getPost)
app.post('/create-post', createPost)
app.post('/like-post/:id', likePost)

exports.api = functions.https.onRequest(app)
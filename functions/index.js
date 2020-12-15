const functions = require('firebase-functions')
const app = require('express')()
const config = require("./handlers/config");
const firebase = require("firebase")
const cors = require('cors')

firebase.initializeApp(config)
app.use(cors())

const {getFavorites} = require('./handlers/favorites')
const {getPosts} = require('./handlers/posts')

// Routes
app.get('/favorites', getFavorites)
app.get('/posts', getPosts)

exports.api = functions.https.onRequest(app)
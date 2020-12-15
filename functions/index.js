const functions = require('firebase-functions')
const app = require('express')()

const cors = require('cors')
app.use(cors())

const {getFavorites} = require('./handlers/favorites')

// Scream routes
app.get('/favorites', getFavorites)

exports.api = functions.https.onRequest(app)
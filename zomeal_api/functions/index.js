const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const userRouter = require('./routes/Users')
const app = express()

app.use('/api',userRouter)


exports.app = functions.https.onRequest(app)
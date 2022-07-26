const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://heropy:mJGPt8KyOl694OQ8@cluster0.kehet.mongodb.net/KDT-TEST?retryWrites=true&w=majority')
const db = mongoose.connection
db.once('open', () => {
  console.log('MogoDB connected!')
})

global.appRoot = __dirname

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/todos', require('./routes/api/todos.js'))
app.use('/api/mongo', require('./routes/api/mongo.js'))

const port = process.env.PORT || 1234
app.listen(port, () => {
  console.log('서버동작')
})

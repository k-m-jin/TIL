const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', (req, res) => {
  res.status(200).json({
    name: 'jini!!!',
  })
})

app.listen(1234, () => {
  console.log('서버동작')
})

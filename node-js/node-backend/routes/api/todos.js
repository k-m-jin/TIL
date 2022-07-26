const fs = require('fs')
const { nanoid } = require('nanoid')
const express = require('express')
const router = express.Router()

const todosdir = `${global.appRoot}/todos`
const todosFile = `${global.appRoot}/todos/index.json`
//Read
router.get('/', (req, res) => {
  const todos = JSON.parse(fs.readFileSync(todosFile, 'utf8'))

  res.status(200).json(todos)
})
//create
router.post('/', (req, res) => {
  const { title } = req.body

  let todos = {}
  try {
    todos = JSON.parse(fs.readFileSync(todosFile, 'utf8'))
  } catch (error) {
    fs.mkdirSync(todosdir)
    fs.writeFileSync(todosFile, '{}')
  }
  todos[nanoid()] = { title }
  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2))

  res.status(200).json({ title })
})
//Update
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const todos = JSON.parse(fs.readFileSync(todosFile, 'utf8'))
  todos[id].title = { title }

  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2))

  res.status(200).json(todos[id])
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  const todos = JSON.parse(fs.readFileSync(todosFile, 'utf8'))
  delete todos[id]

  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2))
  res.status(200).json(true)
})

module.exports = router

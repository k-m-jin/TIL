const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const Schma = mongoose.Schema
const Users = mongoose.model(
  'users',
  new Schma({
    name: String,
    age: Number,
  })
)

router.post('/', async (req, res) => {
  const user = await Users.create({
    name: 'KimMyeongJin',
    age: 95,
  })
  console.log(user)

  res.statusMessage(200).json(true)
})

router.get('/', async (req, res) => {
  const users = await Users.find({})
  console.log(users)

  res.status(200).json(users)
})

router.get('/:name', async (req, res) => {
  const { name } = req.params
  const user = await Users.findOne({ name })
  res.status(200).json(user)
})

router.put('/:name', async (req, res) => {
  const { name } = req.params
  const user = await Users.findOne({ name })
  const updatedUser = await user.updateOne({ age: 100 })
  res.status(200).json(updatedUser)
})

router.delete('/:name', async (req, res) => {
  const { name } = req.params
  const user = await Users.findOne({ name })
  user.delete()
  res.status(200).json(true)
})

module.exports = router

// @desc Get goals
// @route GET /api/goals
// @access Private

const Goal = require('../models/goalModel')
const asyncHandler = require('express-async-handler')
const { request } = require("express")

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
    // res.status(200).json({message: "Get goals"})
})

const setGoals = asyncHandler(async (req, res) => {
    console.log(req.body)
    if (!req.body.text) {
        // res.status(400).json({message: "please add a text"})
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
    // res.status(200).json(req.body)
})

const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal Not Found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    res.status(200).json(updatedGoal)
    // res.status(200).json({message: `Update Goal ${req.params.id}`})
})

const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal Not Found')
    }
    await goal.deleteOne()
    res.status(200).json({id: req.params.id})
    // res.status(200).json({message: `Delete Goal ${req.params.id}`})
})

module.exports = {
    getGoals,setGoals,updateGoals,deleteGoals
}
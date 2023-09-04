const Habit = require("../models/habitModel")
const mongoose = require("mongoose")

// GET all habits
const getHabits = async (req, res) => {
    const user_id = req.user._id

    const habits = await Habit.find({user_id}).sort({createdAt: -1})

    res.status(200).json(habits)
}

// GET a single habit
const getHabit = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such habit"})
    }

    const habit = await Habit.findById(id)

    if (!habit) {
        return res.status(404).json({error: "No such habit"})
    }

    res.status(200).json(habit)
}

// POST a new habit
const postHabit = async (req, res) => {
    const {title, description, status, date} = req.body

    // add doc to db
    try {
        const user_id = req.user._id
        const habit = await Habit.create({title, description, status, date, user_id})
        res.status(200).json(habit)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a single habit
const deleteHabit = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such habit"})
    }

    const habit = await Habit.findOneAndDelete({_id: id})

    if (!habit) {
        return res.status(404).json({error: "No such habit"})
    }

    res.status(200).json(habit)
}

// UPDATE a single habit
const updateHabit = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such habit"})
    }

    const habit = await Habit.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!habit) {
        return res.status(404).json({error: "No such habit"})
    }

    res.status(200).json(habit)
}

module.exports = {
    getHabits,
    getHabit,
    postHabit,
    deleteHabit,
    updateHabit
}
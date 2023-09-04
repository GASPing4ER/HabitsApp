const express = require("express")
const { getHabits, getHabit,postHabit, deleteHabit, updateHabit } = require("../controllers/habitController")
const requireAuth = require("../middleware/requireAuth")
const router = express.Router()

router.use(requireAuth)

// GET all habits
router.get("/", getHabits)

// GET a single habit
router.get("/:id", getHabit)

// POST a new habit
router.post("/", postHabit)

// DELETE a single habit
router.delete("/:id", deleteHabit)

// UPDATE a single habit
router.patch("/:id", updateHabit)

module.exports = router
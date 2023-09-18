const express = require('express')
const router = express.Router()

// Import controllers
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

// Bind methods with same route
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)


module.exports = router
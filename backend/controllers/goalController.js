const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET  /api/goals
// @access  private
const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({ msg: 'Get goals'  })
})

// @desc    Set goal
// @route   POST  /api/goals
// @access  private
const setGoal = asyncHandler( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ msg: 'Set goals'  })
})

// @desc    Update goal
// @route   PUT  /api/goals:id
// @access  private
const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({msg: `Update goal ${req.params.id}`})
})

// @desc    Delete goal
// @route   DELETE  /api/goals:id
// @access  private
const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json({msg: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
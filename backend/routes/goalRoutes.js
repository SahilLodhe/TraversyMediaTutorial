const express = require('express')
const router = express.Router()
const {getGoals,setGoals,deleteGoals,updateGoals} = require('../controllers/goalControllers')

// router.get('/', (req, res) => {
//     // res.send('Get goals')
//     res.status(200).json({message: 'Get Goals'})
// })

// further absraction
router.get('/',getGoals)

// router.post('/', (req, res) => {
//     res.status(200).json({message: "Set Goals"})
// })
router.post('/',setGoals)


// req.params.id. This means the response message will be something like "Update Goal {id}" where {id} is the dynamic value extracted from the request's URL parameter.
// router.put('/:id', (req, res) => {
//     res.status(200).json({message: `Update Goal ${req.params.id}`})
// })
router.put('/:id', updateGoals)


// router.delete('/:id', (req, res) => {
    //     res.status(200).json({message: `Delete Goal ${req.params.id}`})
    // })
router.delete('/:id',deleteGoals)

module.exports = router // export these routes
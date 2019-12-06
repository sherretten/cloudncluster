const router = require('express').Router()
let freeway = require('../models/freeway.model')
//This file is looking to add things... we might not need. 
router.route('/').get((req, res) => {
  freeway.find()
    .then(freeways => res.json(freeways))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;
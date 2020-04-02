const express = require('express');
const router = express.Router();

//routes for questions
router.post('/questions/create',require('../controllers/questionsController').create);//route to create question
router.delete('/questions/:id/delete',require('../controllers/questionsController').deleteQuestion);//route to delete question
router.get('/questions/:id',require('../controllers/questionsController').listQuestions);//route to list questions

//routes for options
router.post('/questions/:id/options/create',require('../controllers/questionsController').createOption);//route to create options
router.delete('/options/:id/delete',require('../controllers/questionsController').deleteOption);//route to delete questions
router.put('/options/:id/add_vote',require('../controllers/questionsController').addVote);//route to add votes
module.exports = router;
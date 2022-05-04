const router = require('express').Router();

const controller = require('./controllers');

router.get('/pets', controller.animals.get);

module.exports = router;

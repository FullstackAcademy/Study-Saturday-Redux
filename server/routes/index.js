const router = require('express').Router();

router.use('/students', require('./students'));
router.use('/tests', require('./tests'));

module.exports = router;

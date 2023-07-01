const router = require('express').Router();

const { renderIndex } = require('../handlers/handlers');

router.get('/', renderIndex);

module.exports = router;

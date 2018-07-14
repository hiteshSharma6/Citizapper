var express = require('express');
var router = express.Router();
var controllers = {
  index: require('../controllers/index')
}

router.get('/', controllers.index.render);

module.exports = router;

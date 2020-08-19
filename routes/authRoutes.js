const express = require('express');
const router = express.Router();
const controller = require('../controller/authController');



router.get('/', function(req, res) {
    res.send({ message: 'welcome to our upload module apis' });
});

router.get('/hello', function(req, res) {
    res.send({ message: 'module apis' });
});

router.post('/data_enter',controller.data_enter);
router.get('/get_data',controller.get_data);


module.exports = router;
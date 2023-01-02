const express = require('express');
const weatherController = require('../../controllers/weatherController');

const router = express.Router();

router.get('/location', weatherController.getLocation);

router.get('/current/:city?', weatherController.getCurrentWeatherLocation);

router.get('/forecast/:city?', weatherController.getCurrentForecastLocation);

module.exports = router;

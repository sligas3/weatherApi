const weatherService = require('../services/weatherService');

const getLocation = async (req, res) => {
	try {
		const location = await weatherService.getLocation();
		res.header('Content-Type', 'application/json');
		res.header('Access-Control-Allow-Origin', '*');
		res.status(200).send({ status: 'OK', data: location });
	} catch (error) {
		res
			.status(error?.status || 500)
			.send({ status: 'FAILED', data: { error: error?.message || error } });
	}
};

const getCurrentWeatherLocation = async (req, res) => {
	const {
		params: { city },
	} = req;
	try {
		const getLocation = await weatherService.getLocation(city);
		const getWeather = await weatherService.getWeather(getLocation.city);
		res.status(200).send({
			status: 'OK',
			data: { location: getLocation, weather: getWeather },
		});
	} catch (error) {
		res.status(error?.status || 500).send({
			status: 'FAILED',
			data: { error: error?.message || error },
		});
	}
};

const getCurrentForecastLocation = async (req, res) => {
	const {
		params: { city },
	} = req;
	try {
		const getLocation = await weatherService.getLocation(city);
		const getForecast = await weatherService.getForecast(getLocation.city);
		res.status(200).send({
			status: 'OK',
			data: { location: getLocation, forecast: getForecast },
		});
	} catch (error) {
		res.status(error?.status || 500).send({
			status: 'FAILED',
			data: { error: error?.message || error },
		});
	}
};

module.exports = {
	getLocation,
	getCurrentWeatherLocation,
	getCurrentForecastLocation,
};

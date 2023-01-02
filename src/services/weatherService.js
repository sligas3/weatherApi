const axios = require('axios');

const getLocation = async (city) => {
	try {
		const url = city
			? `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=32e37d3c443bdac8cbcd429c6762ed0d`
			: 'http://ip-api.com/json/?fields=city';
		const location = await axios.get(url);

		// armo un objeto con la propiedad city, cuando se consulta por una ciudad en especifico
		// que proviene de la api openweather, caso contrario se devuelva la data de ip-api
		return location?.data[0] ? { city: location.data[0].name } : location.data;
	} catch (error) {
		throw error;
	}
};

const getWeather = async (city) => {
	try {
		const weather = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=32e37d3c443bdac8cbcd429c6762ed0d`
		);
		return weather.data;
	} catch (error) {
		throw error;
	}
};

const getForecast = async (city) => {
	try {
		const forecast = await axios.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&lang=es&units=metric&appid=32e37d3c443bdac8cbcd429c6762ed0d`
		);
		return forecast.data;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getLocation,
	getWeather,
	getForecast,
};

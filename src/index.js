require('dotenv').config();
const bodyParser = require('body-parser');
const v1WeatherApp = require('./v1/routes/weatherRoutes');
const cors = require('cors');

const app = require('../app');

app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);
app.use(bodyParser.json());
app.use('/v1', v1WeatherApp);

module.exports = app;

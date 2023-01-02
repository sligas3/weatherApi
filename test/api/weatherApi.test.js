const request = require('supertest');
const app = require('../../src/index');
// agregue un array de paises para recorrer y probar con distintos paises
// en ocaciones el test falla porque la api no devuelve el mismo nombre especifico que esta seteado en el json
const { countries } = require('../../src/data/countries.json');

describe('Obtener ubicacion actual', () => {
	it('get location', async () => {
		const response = await request(app)
			.get('/v1/location')
			.set('Accept', 'application/json');
		expect(response.status).toEqual(200);
	});
});

describe('Obtener ubicacion actual y estado del tiempo actual', () => {
	it('get current weather location', async () => {
		const response = await request(app)
			.get('/v1/current')
			.set('Accept', 'application/json');
		expect(response.status).toEqual(200);
	});
});

describe('Obtener ubicacion especifica por parametro y estado del tiempo', () => {
	it('get specific weather location', async () => {
		let i = Math.floor(Math.random() * (countries.length - 1 + 1) + 1);
		let city = countries[i].name;
		const response = await request(app)
			.get(`/v1/current/${city}`)
			.set('Accept', 'application/json');
		expect(response.status).toEqual(200);
		expect(response.body.data.location.city).toMatch(city);
	});
});

describe('Obtener ubicacion actual y pronostico del tiempo de los proximos 5 dias', () => {
	it('get current forecast location', async () => {
		const response = await request(app)
			.get('/v1/forecast')
			.set('Accept', 'application/json');
		expect(response.status).toEqual(200);
	});
});

describe('Obtener ubicacion especifica por parametro y pronostico del tiempo de los proximos 5 dias', () => {
	it('get specific forecast location', async () => {
		let i = Math.floor(Math.random() * (countries.length - 1 + 1) + 1);
		let city = countries[i].name;
		const response = await request(app)
			.get(`/v1/forecast/${city}`)
			.set('Accept', 'application/json');
		expect(response.status).toEqual(200);
		expect(response.body.data.location.city).toMatch(city);
	});
});

const express = require('express');
const cors = require('cors');
const { factSpitter } = require('./utils/fact-collection');

const app = express();
app.use(cors());

require('dotenv').config();

app.use(express.json());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization'
	);
	next();
});

app.get('/', (req, res) => {
	try {
		res.send({ text: 'Bombaclat' });
	} catch (err) {
		res.send(err);
	}
});

app.post('/password', (req, res) => {
	const password = req.query.password;

	try {
		if (password === '') {
			res.json({ access: false, message: 'Error. Try Again.' });
		} else {
			if (password === process.env.PASSWORD) {
				res.json({ access: true, message: 'Access Granted :)' });
			} else {
				res.json({ access: false, message: 'Incorrect Password :(' });
			}
		}
	} catch (err) {
		res.send(err);
	}
});

app.get('/fact', (req, res) => {
	const collectedFact = factSpitter();
	try {
		res.json({ fact: collectedFact });
	} catch (err) {
		res.send(err);
	}
});

app.listen(`${process.env.PORT}`, () => {
	console.log(`running server on port ${process.env.PORT}`);
});

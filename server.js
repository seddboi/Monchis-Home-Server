const express = require('express');
const cors = require('cors');
const { factSpitter } = require('./utils/fact-collection');

const app = express();
app.use(cors());

require('dotenv').config();

app.use(express.json());

app.post('/password', (req, res) => {
	const password = req.body.password;
	if (password == '') {
		res.json({ access: false, message: 'Type something in, you silly goose ;)' });
	} else {
		if (password == process.env.PASSWORD) {
			res.json({ access: true, message: 'Access Granted :)' });
		} else {
			res.json({ access: false, message: 'Incorrect Password :(' });
		}
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

app.listen(`${process.env.ACCESS_PORT}`, () => {
	console.log(`running server on port ${process.env.ACCESS_PORT}`);
});

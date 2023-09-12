const express = require('express');
const cors = require('cors');

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

app.listen(`${process.env.ACCESS_PORT}`, () => {
	console.log(`running server on port ${process.env.ACCESS_PORT}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



// create a GET route
app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/api/customers', (req, res) => {
	const customers = [
		{id: 1, firstName: 'Brandon', lastName:'Cao'},
		{id: 2, firstName: 'Anders', lastName:'Oterlei'},
		{id: 3, firstName: 'Taylor', lastName:'Flores'},
		{id: 4, firstName: 'Erik', lastName:'Levin'}
	];
	res.json(customers);
});

// console.log that your server is up and running
app.listen(port, () => console.log(
    `Listening on port ${port}`
));
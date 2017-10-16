const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get('/', (req, res) => {
		return app.render(req, res, '/', req.params);
	})

	server.get('/all_matches', (req, res) => {
		return app.render(req, res, '/all_matches', req.params);
	})

	server.get('/upcoming', (req, res) => {
		return app.render(req, res, '/upcoming', req.params);
	})

	server.get('/team/:id', (req, res) => {
		return app.render(req, res, '/team', req.params);
	})

	server.get('*', (req, res) => {
		return handle(req, res);
	})

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Custom Server Ready on http://localhost:${port}`);
	});
});
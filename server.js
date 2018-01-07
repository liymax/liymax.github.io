// Require the framework and instantiate it
const fastify = require('fastify')();
const path = require('path');
const serveStatic = require('serve-static');
fastify.use(serveStatic(path.join(__dirname, '/')));


// Declare a route
fastify.get("/", function (request, reply) {
	reply.type('text/html');
	const fs = require('fs');
	const stream = fs.createReadStream('./dist/index.html', 'utf8');
	reply.send(stream);
});


// Run the server!
fastify.listen(3000, function (err) {
	if (err) throw err;
	console.log(`server listening on ${fastify.server.address().port}`)
});
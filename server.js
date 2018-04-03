
'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});


const init = async () => {

    await server.register(require('inert'));

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.file('./static/Home/home.html');
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};
init();
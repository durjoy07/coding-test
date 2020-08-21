'use strict'
import Hapi from '@hapi/hapi';
import HapiRouter from 'hapi-router';
import Plugin from './../plugin';

// Importing Configurations Files from config/index.js
import { HttpServerConfig } from '../../config';

// ===========================================================
//                       SERVER SETUP   
// ===========================================================

const server = Hapi.server({
    port: HttpServerConfig.port,
    host: HttpServerConfig.hostname,
    routes: {
        "cors": {
            origin: ["*"],
            headers: ["Accept", "Content-Type"],
        }
    }
});

const startServer = async () => {
    try {
        await server.register(Plugin);
        await server.register({
            plugin: HapiRouter,
            options: {
                routes: './src/api/**/routes.js'
            },
        })

        server.route([{
            method: 'GET',
            path: '/',
            handler: async (request, h) => {
                return "<h1>WOW!!! It's Working Successfully.........</h1>";
            }
        }
        ])
    }
    catch (err) {
        console.log('ERR: Server Plugin - ', err);
    }

    await server.start();
    console.log(`Server is running at: ${server.info.uri}`)
};

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})

export default startServer;

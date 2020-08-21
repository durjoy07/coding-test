const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package.json');

const swaggerOptions = {
    info: {
        title: 'Phonebook API',
        version: Pack.version,
        description: 'This is test API for Spring Rain coding test',
        contact: {
            name: 'MD Naim Hossen',
            url: 'https://www.linkedin.com/in/durjoy07',
            email: 'naks.studycare@gmail.com'
        }
    }
}

module.exports = [
    {
        plugin: Inert
    },
    {
        plugin: Vision
    },
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
]
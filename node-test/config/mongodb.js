export default {
    databaseConnection: {
        protocol: 'mongodb',
        hostname: process.env.MONGO_DB_HOSTNAME || 'localhost',
        port: process.env.MONGO_DB_PORT || 27017,
        database: process.env.MONGO_DB_DATABASE || 'testdb',
        uri() {
            return this.protocol + '://' + this.hostname + ':' + this.port + '/' + this.database;
        }
    },
    auth: {
        authdb: process.env.MONGO_DB_AUTHDB || 'admin',
        user: process.env.MONGO_DB_USER || 'naim',
        password: process.env.MONGO_DB_PASSWORD || '123456'
    }
};
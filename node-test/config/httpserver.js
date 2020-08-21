export default {
    hostname: process.env.HTTP_HOSTNAME || 'localhost',
    port: process.env.HTTP_PORT || 3030,
    cors: process.env.HTTP_CORS === 'true' ? true : JSON.parse(process.env.HAPI_CORS) || true
}
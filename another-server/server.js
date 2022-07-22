const config = require('./config.json');
const ENV = process.env.NODE_ENV || 'development';
const configData = config[ENV];
for (const property in configData) {
    process.env[property] = configData[property]
}
const app = require('./app');
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Api is running on port ${port}`);
});
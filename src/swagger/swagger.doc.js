const swaggerJsDoc = require("swagger-jsdoc");

const config = require('config');
const credentials = config.get('Customer.config');

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "DexWin", 
			description: `Use This URL * ${credentials.SWAGGER_URL} *`,
			version: "1.0.0",
		},
		servers: [
			{
				url: credentials.SWAGGER_URL
			},
		],
	},
	apis: ["./src/api/v1/routes/*.js"],
}; 

const specs = swaggerJsDoc(options);
module.exports = { specs }
const { createLogger, transports, format } = require('winston');
require('winston-mongodb');
const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'loggerInfo.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.Console({
            filename: 'loggerInfo.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        // new transports.MongoDB({
        //     level: 'info',
        //     db: process.env.DEVELOPMENT_DB_URL,
        //     options: {
        //         useUnifiedTopology: true
        //     },
        //     collection: 'logs',
        //     format: format.combine(format.timestamp(), format.json())
        // })
    ] 
})

module.exports = logger;
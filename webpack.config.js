const path = require('path')

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    }
}
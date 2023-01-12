const webpackConfigClient = require("./webpack.config.client")
const webpackConfigServer = require("./webpack.config.server")

module.exports = [
    {
        ...webpackConfigClient,
        mode: "development",
        devtool: 'inline-source-map'

    },
    {
        ...webpackConfigServer,
        mode: "development",
        devtool: 'inline-source-map'
    }
]

module.exports.parallelism = 2
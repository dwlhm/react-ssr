const spawn = require("cross-spawn")
const path = require("path")
const webpack = require("webpack")
const webpackConfigClient = require("../webpack.config.client")
const webpackConfigServer = require("../tsconfig.server.json")

const compiler = webpack([
    {
        ...webpackConfigClient,
        mode: "development",
        devtool: "source-map",
        output: {
            ...webpackConfigClient.output,
            filename: "[name].js",
        },
    },
    {
        ...webpackConfigServer,
        mode: "development",
        devtool: "source-map",
    },
])

let node

compiler.watch({}, (err, stats) => {
    if (err) {
        console.error(err.toString())
        process.exit(1)
    }

    console.log(stats?.toString("minimal"))
    const compiledSuccessfully = !stats?.hasErrors()
    if (compiledSuccessfully && !node) {
        console.log("Starting NodeJS...")
        node = spawn(
            "node",
            ["--inspect", path.join(__dirname, "../functions/server.js")],
            {
                stdio: "inherit"
            }
        )
    }
})
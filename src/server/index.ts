// server/index.ts
import express from "express"
import fs from "fs"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { 
    StaticRouter,
} from "react-router-dom/server"
import { Router } from "../app/router"

const server = express()

server.set("view engine", "ejs")
server.set("views", path.join(__dirname, "views"))

server.use("/", express.static(path.join(__dirname, "client")))

const manifest = fs.readFileSync(
    path.join(__dirname, "client/manifest.json"),
    "utf-8"
)

server.use(function (_, res, next) {
    res.header("X-Powered-By", "dwlhm")
    next()
})

const assets = JSON.parse(manifest)

server.get("*", (req, res) => {
    // res.send("HELLO FROM SERVER")
    const component = ReactDOMServer.renderToString(
        React.createElement(
            StaticRouter,
            { location: req.url },
            React.createElement(
                Router
            ))
    )
    res.render("client", { assets, component})
})

server.listen(3030, () => {
    console.log("SERVER RUNNING on :3030")
})

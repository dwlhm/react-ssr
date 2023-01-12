"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/index.ts
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.get("/", (req, res) => {
    res.send("HELLO FROM SERVER");
});
server.listen(3030, () => {
    console.log("SERVER RUNNING");
});

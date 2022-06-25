"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const handlers_1 = require("./handlers");
const read = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const load = async () => {
    let start = Date.now();
    await (0, handlers_1.registerCommands)();
    console.log(`Started in ${Date.now() - start}ms`);
};
read.on("line", async (rawline) => {
    if (!rawline)
        return;
    let line = rawline.split(" ");
    let name = line.shift();
    let args = line;
    const reply = await (0, handlers_1.runCommand)({ name: name, args: args, createdTimestamp: Date.now() });
    if (reply.type == "ok")
        return console.log(`Command ${reply.command.name} - OK.\nOutput: ${reply.message}`);
    return console.error(`Command ${reply.command.name} - Error.\nLog: ${reply.message}`);
});
load();

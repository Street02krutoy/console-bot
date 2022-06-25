"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = exports.runCommand = exports.commands = void 0;
const fs_1 = __importDefault(require("fs"));
exports.commands = [];
const runCommand = async (cmd) => {
    if (!fs_1.default.existsSync(`./build/src/commands/${cmd.name}.js`))
        return { type: "error", message: `Cannot find command ${cmd.name}`, command: cmd };
    const commandFile = require(`../commands/${cmd.name}`);
    if (cmd.args.length !== commandFile.args.length)
        return { type: "error", message: `Got ${cmd.args.length} args instead of ${commandFile.args.length}`, command: cmd };
    try {
        return await commandFile.run(cmd);
    }
    catch (e) {
        return { type: "error", message: `Error in ${cmd.name}: \n ${e}`, command: cmd };
    }
    ;
};
exports.runCommand = runCommand;
const registerCommands = async () => {
    const files = fs_1.default.readdirSync("build/src/commands/");
    for (let filename of files) {
        let file = require(`../commands/${filename}`);
        file.info ? exports.commands.push(file.info) : null;
    }
    ;
    return exports.commands;
};
exports.registerCommands = registerCommands;

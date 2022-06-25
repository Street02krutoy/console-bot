"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command = {
    args: [],
    run: async (cmd) => {
        const cmds = require("../handlers/index")
            .commands.map((command) => `\n\nName: ${command.name} \nDescription: ${command.description} \nArgs: ${command.args.length ? `${command.args.map((arg) => `Name: ${arg.name} Description: ${arg.description}`).join("\n")}` : `None`} `)
            .join("\n\n");
        return { type: "ok", message: cmds, command: cmd };
    },
    info: {
        name: "help",
        description: "show all cmds and usage",
        args: []
    }
};
module.exports = command;

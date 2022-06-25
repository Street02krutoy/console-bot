import { ArgumentInfo, CommandFileI, CommandI, CommandInfo } from "../types";

const command:CommandFileI = {
    args: [],
    run:async (cmd:CommandI)=>{
        const cmds = require("../handlers/index")
        .commands.map((command:CommandInfo)=>
        `\n\nName: ${command.name} \nDescription: ${command.description} \nArgs: ${command.args.length ? `${command.args.map((arg:ArgumentInfo)=>`Name: ${arg.name} Description: ${arg.description}`).join("\n")}` : `None` } `)
        .join("\n\n")
        return {type: "ok", message: cmds, command:cmd}
    },
    info:{
        name: "help",
        description: "show all cmds and usage",
        args: []
    }
}

module.exports = command;
import fs from 'fs';
import {CommandFileI, CommandI, CommandInfo, Reply} from "../types";
export const commands:CommandInfo[] = []; 

export const runCommand = async (cmd:CommandI):Promise<Reply> => {
    if(!fs.existsSync(`./build/src/commands/${cmd.name}.js`)) 
        return {type: "error", message: `Cannot find command ${cmd.name}`, command:cmd}
    const commandFile:CommandFileI = require(`../commands/${cmd.name}`); 
    if(cmd.args.length!==commandFile.args.length) return {type: "error", message: `Got ${cmd.args.length} args instead of ${commandFile.args.length}`, command:cmd}
    try {
        return await commandFile.run(cmd);
    }   catch (e) {
        return {type: "error", message: `Error in ${cmd.name}: \n ${e}`, command:cmd};
    };
};

export const registerCommands = async (): Promise<CommandInfo[]> => {
    const files = fs.readdirSync("build/src/commands/");

    for (let filename of files) {
        let file:CommandFileI = require(`../commands/${filename}`);

        file.info ? commands.push(file.info) : null;
    };
    return commands;
}
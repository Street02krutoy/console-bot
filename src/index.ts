import readline from "readline";
import {registerCommands, runCommand} from "./handlers"
import { Reply } from "./types";

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const load = async () => {
    let start = Date.now()

    await registerCommands();

    console.log(`Started in ${Date.now()-start}ms`)
}


read.on("line", async (rawline) => {
    if (!rawline) return;
    let line = rawline.split(" ")
    let name:string = line.shift();
    let args:Array<string> = line;
    const reply:Reply = await runCommand({name:name, args:args,createdTimestamp:Date.now()})
    if(reply.type == "ok") return console.log(`Command ${reply.command.name} - OK.\nOutput: ${reply.message}`)
    return console.error(`Command ${reply.command.name} - Error.\nLog: ${reply.message}`)
});

load()


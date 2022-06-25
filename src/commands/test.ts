import { CommandFileI, CommandI } from "../types";

const command:CommandFileI = {
    args:["test"],
    run:async (cmd:CommandI)=>{
        return {type: "ok", message: `Successfully! (${Date.now()-cmd.createdTimestamp}ms)`, command:cmd}
    },
    info:{
        name: "test",
        description: "test command idk",
        args: [{name: "test", description:"test argument idk"}]
    }
}

module.exports = command;
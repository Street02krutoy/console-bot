"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command = {
    args: ["test"],
    run: async (cmd) => {
        return { type: "ok", message: `Successfully! (${Date.now() - cmd.createdTimestamp}ms)`, command: cmd };
    },
    info: {
        name: "test",
        description: "test command idk",
        args: [{ name: "test", description: "test argument idk" }]
    }
};
module.exports = command;

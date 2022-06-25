export interface CommandI {
    name: string,
    args: Array<string>,
    createdTimestamp: number,
    info?: CommandInfo, 
}

export interface CommandInfo {
    name: string,
    args: Array<ArgumentInfo>,
    description: string,
}

export interface ArgumentInfo {
    name: string,
    description: string,
}

export interface Reply {
    type: "error" | "ok",
    message: string,
    command: CommandI,
}

export interface CommandFileI {
    args:Array<string>
    run: (cmd:CommandI) => Promise<Reply> | Reply
    info: CommandInfo, 
}
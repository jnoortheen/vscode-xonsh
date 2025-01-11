import * as fs from "node:fs";
import * as path from "node:path";

export function which(cmd: string): string | undefined {
  if (cmd.includes(path.sep)) {
    // the cmd is given as full path. check that it exists
    if (fs.existsSync(cmd)) {
      return cmd;
    }
  } else if (process.env.PATH) {
    // search in path and return
    const dirs = process.env.PATH.split(path.delimiter);

    for (const folder of dirs) {
      const fullpath = path.join(folder, cmd);
      if (fs.existsSync(fullpath)) {
        return fullpath;
      }
    }
  }
  return;
}

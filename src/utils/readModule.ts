import path from "path";
import {existsSync} from "fs-extra";

export function readModule(file:string) {
  const filePath = path.resolve(file);
  if (existsSync(filePath)) {
    return require(filePath);
  }
  return false;
}
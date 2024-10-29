import { startCase, lowerCase } from "loadsh";
import shortUUID from "short-uuid";

export function titleCase(str) {
  return startCase(lowerCase(str));
}

export function randomID() {
  return shortUUID.generate();
}

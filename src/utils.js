import startCase from "loadsh/startCase";
import lowerCase from "loadsh/lowerCase";

export function titleCase(str) {
  return startCase(lowerCase(str));
}

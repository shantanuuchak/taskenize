import _ from "loadsh";

export function titleCase(str) {
  return _.startCase(_.lowerCase(str));
}

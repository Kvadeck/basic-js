const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  for (const i of matrix) {
    for (const j of i) {
      if (j == '^^') cats++;
    }
  }
  return cats
}

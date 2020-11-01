const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  return cats
    .map((el) => el.filter((item) => item === '^^'))
    .reduce((sum, cur) => sum + cur.length, 0);
};

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, resultArr = []) {
    resultArr.push(count);

    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], count + 1, resultArr);
      }
    }

    return resultArr.sort((a, b) => b - a).pop();
  }
};
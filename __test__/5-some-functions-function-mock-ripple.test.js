const someFunctionObj = require("../javascript-testing/some-functions");
const childObj = require("../javascript-testing/child-functions");

test("5-some-functions-function-mock-ripple", function () {
  console.log(
    "5-some-functions-function-mock-ripple add",
    someFunctionObj.add(2, 3)
  );
  console.log(
    "5-some-functions-function-mock-ripple multiple",
    childObj.multiply(2, 3)
  );
});

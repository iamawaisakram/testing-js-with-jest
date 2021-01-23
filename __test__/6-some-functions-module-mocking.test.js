const someFunctionObj = require("../javascript-testing/some-functions");
const childObj = require("../javascript-testing/child-functions");

// jest.mock("../javascript-testing/child-functions", function () {
//   return {
//     multiply: function (a, b) {
//       return a * a + b * b;
//     },
//   };
// });

jest.mock("../javascript-testing/child-functions");

//mock just mocked the module and override the implementation by returning undefined so we have to provide over own implementation

test("6-some-functions-module-mocking test mocked multiply", function () {
  console.log(childObj.multiply(2, 3));
  console.log(someFunctionObj.anotherParentFunction(2, 3));
});

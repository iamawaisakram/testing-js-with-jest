const someFunctionObj = require("../javascript-testing/some-functions");
const childObj = require("../javascript-testing/child-functions");

describe("1 describe of 4-some-functions-function-mock", function () {
  test("1 describe of 4-some-functions-function-mock testing mocked add", function () {
    let addMockedFunction = jest.fn(someFunctionObj.add);

    console.log("mock", addMockedFunction(2, 3));

    addMockedFunction.mockImplementation(function (a, b) {
      return a * b;
    });

    console.log("parentFunction", someFunctionObj.parentFunction(2, 3));
    console.log("mockImplementation", addMockedFunction(2, 3));
  });
});

test("1 4-some-functions-function-mock testing mocked add", function () {
  console.log(someFunctionObj.add(2, 3));
});

describe("2 describe of 4-some-functions-function-mock", function () {
  test("2 describe of 4-some-functions-function-mock testing mocked add", function () {
    someFunctionObj.add = jest.fn(someFunctionObj.add);

    console.log("mock", someFunctionObj.add(2, 3));

    someFunctionObj.add.mockImplementation(function (a, b) {
      return a * b;
    });

    console.log("parentFunction", someFunctionObj.parentFunction(2, 3));
    console.log("mockImplementation", someFunctionObj.add(2, 3));
  });
});

test("2 4-some-functions-function-mock testing mocked add", function () {
  console.log(someFunctionObj.add(2, 3));
});

test("3 4-some-functions-function-mock testing mocked add", function () {
  // let addMocked = jest.spyOn(someFunctionObj, "add");

  // addMocked.mockReturnValue(10);
  // console.log("calling Add", someFunctionObj.add(2, 3));

  // console.log("parentFunction", someFunctionObj.parentFunction(2, 3));

  // let multiplyMocked = jest.spyOn(childObj, "multiply");

  // multiplyMocked.mockReturnValue(14);

  // console.log(
  //   "parentFunction anotherParentFunction",
  //   someFunctionObj.anotherParentFunction(2, 3)
  // );

  // multiplyMocked.mockRestore();

  childObj.multiply = jest.fn(childObj.multiply);
  childObj.multiply.mockImplementation(function (a, b) {
    return a * a + b * b;
  });

  console.log(
    "parentFunction anotherParentFunction",
    someFunctionObj.anotherParentFunction(2, 3)
  );
});

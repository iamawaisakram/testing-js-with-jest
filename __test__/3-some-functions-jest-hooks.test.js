const someFunctionOj = require("../javascript-testing/some-functions");

beforeAll(function () {
  console.log("3-some-functions-jest-hooks beforeAll life cycle event");
});

beforeEach(function () {
  console.log("3-some-functions-jest-hooks beforeEach life cycle event");
});

test("3-some-functions-jest-hooks testing add 2, 3", function () {
  console.log("3-some-functions-jest-hooks testing add 2, 3");
  expect(someFunctionOj.add(2, 3)).toBe(5);
});

describe("describe of 3-some-functions-jest-hooks", function () {
  beforeAll(function () {
    console.log(
      "describe of 3-some-functions-jest-hooks beforeAll life cycle event"
    );
  });

  beforeEach(function () {
    console.log(
      "describe of 3-some-functions-jest-hooks beforeEach life cycle event"
    );
  });

  test("describe of 3-some-functions-jest-hooks testing add 3, 3", function () {
    console.log("describe of 3-some-functions-jest-hooks testing add 3, 3");
    expect(someFunctionOj.add(3, 3)).toBe(6);
  });

  test("describe of 3-some-functions-jest-hooks testing add 4, 4", function () {
    console.log("describe of 3-some-functions-jest-hooks testing add 4, 4");
    expect(someFunctionOj.add(4, 4)).toBe(8);
  });

  afterEach(function () {
    console.log(
      "describe of 3-some-functions-jest-hooks afterEach life cycle event"
    );
  });

  afterAll(function () {
    console.log(
      "describe of 3-some-functions-jest-hooks afterAll life cycle event"
    );
  });
});

test("3-some-functions-jest-hooks testing add 6, 6", function () {
  console.log("3-some-functions-jest-hooks testing add 6, 6");
  expect(someFunctionOj.add(6, 6)).toBe(12);
});

afterEach(function () {
  console.log("3-some-functions-jest-hooks afterEach life cycle event");
});

afterAll(function () {
  console.log("3-some-functions-jest-hooks afterAll life cycle event");
});

//NOTE:
//these life cycle hooks are on file level only

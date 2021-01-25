const someFunctionOj = require("../javascript-testing/some-functions");

test("1-some-functions-simple testing add", function () {
  expect(someFunctionOj.add(2, 3)).toBe(5);
});

test("1-some-functions-simple testing mergeThePassedObjects", function () {
  expect(
    someFunctionOj.mergeThePassedObjects({ name: "Awais" }, { gender: "Male" })
  ).toEqual({
    name: "Awais",
    gender: "Male",
  });
});

test("1-some-functions-simple testing reverseArray", function () {
  expect(someFunctionOj.reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});

// ! NOTES:
// * toEqual -> for both non-primitive and primitive - order of properties of object in toEqual doesn't matter(because there's no index involved like that of an array), but if you use array, the order does matter (of-course)
// * toBe -> only works for primitive values

const someFunctionOj = require("../javascript-testing/some-functions");

test("2-some-functions-async testing asyncMergeThePassedObjects", function () {
  //expect.assertions(1); // assertions function and passed number is just to know before-hand that how many expect function will be called, that is usually happens in async scenario

  return someFunctionOj
    .asyncMergeThePassedObjects({ name: "Awais" }, { gender: "Male" })
    .then((result) => {
      expect(result).toEqual({
        gender: "Male",
        name: "Awais",
      });

      expect(result).toEqual({
        gender: "Male",
        name: "Awais1",
      });
    });
});

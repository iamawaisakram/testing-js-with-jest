const someFunctionOj = require("../javascript-testing/some-functions");

test("2-some-functions-async testing asyncPromiseMergeThePassedObjects", function () {
  //expect.assertions(1); // assertions function and passed number is just to know before-hand that how many expect function will be called, that is usually happens in async scenario

  return someFunctionOj
    .asyncPromiseMergeThePassedObjects({ name: "Awais" }, { gender: "Male" })
    .then((result) => {
      expect(result).toEqual({
        gender: "Male",
        name: "Awais",
      });
    });
});

test("2-some-functions-async testing asyncCallbackMergeThePassedObjects", function (done) {
  //expect.assertions(1);

  someFunctionOj.asyncCallbackMergeThePassedObjects(
    { name: "Awais" },
    { gender: "Male" },
    function (result) {
      try {
        expect(result).toEqual({
          gender: "Male",
          name: "Awais1",
        });
        done();
      } catch (e) {
        done(e);
      }
    }
  );
});

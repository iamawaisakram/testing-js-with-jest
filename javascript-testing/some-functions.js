const childFunctionObj = require("./child-functions");

function add(a, b) {
  return a + b;
}

function mergeThePassedObjects(obj1, obj2) {
  return {
    ...obj2,
    ...obj1,
  };
}

function reverseArray(arr) {
  return arr.reverse();
}

function asyncPromiseMergeThePassedObjects(obj1, obj2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        ...obj2,
        ...obj1,
      });
    }, 1000);
  });
}

function asyncCallbackMergeThePassedObjects(obj1, obj2, cb) {
  setTimeout(function () {
    cb({
      ...obj2,
      ...obj1,
    });
  }, 1000);
}

function parentFunction(a, b) {
  return add(a, b) + 1;
}

function anotherParentFunction(a, b) {
  return childFunctionObj.multiply(a, b) + 1;
}

module.exports = {
  add,
  mergeThePassedObjects,
  asyncPromiseMergeThePassedObjects,
  reverseArray,
  asyncCallbackMergeThePassedObjects,
  parentFunction,
  anotherParentFunction,
};

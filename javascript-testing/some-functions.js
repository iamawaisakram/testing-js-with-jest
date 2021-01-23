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

function asyncMergeThePassedObjects(obj1, obj2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        ...obj2,
        ...obj1,
      });
    }, 1000);
  });
}

module.exports = {
  add,
  mergeThePassedObjects,
  asyncMergeThePassedObjects,
  reverseArray,
};

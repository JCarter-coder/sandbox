var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
      if (functions.length === 0) {
        resolve([]);
        return;
      }
      const res = new Array(functions.length).fill(null);

      let resolvedCount = 0;

      functions.forEach((el, idx) => {
        el().then((subResult) => {
          res[idx] = subResult;
          resolvedCount++;
          if (resolvedCount === functions.length) {
            resolve(res);
          }
        }).catch((err) => {
          reject(err);
        })
      });
    })
};

rearrangeArray([3,1,-2,-5,2,-4]);
rearrangeArray([-1,1]);

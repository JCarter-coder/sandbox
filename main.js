var numWays = function(n, k) {
  let memo = {};
  function totalWays(i) {
    if (i === 1) {
      return k;
    } 
    if (i === 2) {
      return k*k;
    }
    if (Object.hasOwn(memo, i)) {
      console.log(`When n=${i}...the value is ${memo[i]}`)
      return memo[i];   
    }
    memo[i] = (k - 1) * (totalWays(i - 1) + totalWays(i - 2));
    return memo[i];
  }
  return totalWays(n);
};

console.log(numWays(50, 2));
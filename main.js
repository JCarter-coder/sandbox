function fn(a) {
  if (typeof a === "number") {
    return a;
  } else if (Array.isArray(a)) {
    return a[1];
  } else if (typeof a === "object") {
    return Object.entries(a[Object.keys(a)]);
  }
}

var frequencySort = function(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else obj [s[i]] += 1;
  }
  console.log(obj);
  let keys = [];
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  keys.sort();
  console.log(keys);
  //const sortedObj = obj.toSorted((a, b) => Object.values(a) - Object.values(b));
  
  //const sortedArr = arr.toSorted((a, b) => fn(a) - fn(b));
  //console.log(`${sortedObj}`);
} 

frequencySort("tree")
frequencySort("cccaaa")
frequencySort("Aabb")

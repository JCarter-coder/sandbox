var longestSemiRepetitiveSubstring = function(s) {
  let leftPointer = 0;
  let rightPointer = -1;
  let windowLength = 0;
  let obj = {};
  let temp;
  let pair = undefined;
  for (let i = 0; i < s.length; i++) {
    temp = s[i];
    // a new key is added to the object and assigned a value of 1
    if (!obj[temp]) {
      obj[temp] = 1;
      obj[temp].index = 1;
      console.log(obj[temp].index);
      console.log(`${temp} = 1 and located at ${obj[temp].index}`)
    } 
    // first pair is discovered
    else if ((obj[temp] + 1) <= 2 && pair === undefined) {
      obj[temp] += 1;
      //obj[temp].index ;
      pair = temp;
      console.log(`${temp} = ${obj[temp]}`);
      console.log(`The pair is ${temp}.`)
    } 
    // another pair is discovered
    else if ((obj[temp] + 1) <= 2) {
      // reset left pointer to index after the first number of the pair
      console.log("Update this part...")
    }
    rightPointer += 1;
    windowLength += 1;
    console.log(`Right pointer is at index ${rightPointer}.`);
    console.log(`Window is ${windowLength} characters long.`)
  }
};

longestSemiRepetitiveSubstring("52233");
//longestSemiRepetitiveSubstring("5494");
//longestSemiRepetitiveSubstring("1111111");
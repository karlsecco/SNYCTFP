/*
Question 2 -- decodeString(s): 
Given an encoded string, return its corresponding decoded string. 
The encoding rule is: k[encoded_string], where the encoded_string 
inside the square brackets is repeated exactly k times. 
Note: k is guaranteed to be a positive integer. 
For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

/*
Input: string (encoded)
Output: string (decoded)
Edgecases: empty string, case, mismatched []

* assuming inputs are encoded correctly * 
*/

/*
Pseudocode:
- declare set of letters (or use character codes)
- declare string of current letters
- declare var to hold current letters (after finding a number)
- declare string of current numbers
- declare result string
- loop through string (s) in reverse
  - if ele in letters add ele to beginning of current letters
  - if ele = [ 
    hold letters = current letters + result & 
    reset current letters
  - if ele is number add to current numbers
    - if ele index-1 in letter (or index -1)
      update result with hold letters repeated Number(current numbers) &
      reset current numbers
- return result
*/

function decodeString(s) {
  const ltrs = new Set("abcdefghijklmnopqrstuvwxyz");
  let currLtrs = "";
  let holdLtrs = "";
  let currNums = "";
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "]") {
      continue;
    } else if (ltrs.has(s[i].toLowerCase())) {
      currLtrs = s[i] + currLtrs;
    } else if (s[i] === "[") {
      holdLtrs = currLtrs + result;
      currLtrs = "";
    } else {
      currNums = s[i] + currNums;
      if (ltrs.has(s[i - 1]) || i - 1 < 0) {
        result = holdLtrs.repeat(Number(currNums));
        currNums = "";
      }
    }
  }
  return result;
}

decodeString("4[ab]"); // "abababab"
decodeString("4[Ab]"); // "AbAbAbAb"
decodeString("2[b3[a]"); // "baaabaaa"
decodeString("2[b3[aeiou]"); // "baeiouaeiouaeioubaeiouaeiouaeiou"

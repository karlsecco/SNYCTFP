/*
Question 1 -- sortByStrings(s,t): 

Sort the letters in the string s by the order they occur in the string t. 
You can assume t will not have repetitive characters. 

For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". 
For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

Inputs: string1, string2
Output: string of letters from string1 in order of appearance in string2
Edgcases: empty strings, case
Notes: t contains no duplicates

Pseudocode:
- declare sorted array (not string for space complexity)
- for each letter in string2 (t)
  - compare to each letter in string1 (s)
    - if s === t push to arr
- return joined arr

* consider refactor using frequency counter *

function sortByStrings(s, t) {
  let sorted = [];
  for (let ltrT of t) {
    for (let ltrS of s) {
      if (ltrT.toLowerCase() === ltrS.toLowerCase()) {
        sorted.push(ltrS);
      }
    }
  }
  return sorted.join("");
}
*/

// refactored using frequency counter for O(n) time complexity where n is length of s

function sortByStrings(s, t) {
  let sorted = [];
  let freqCount = {};
  for (let ltrS of s) {
    freqCount[ltrS] = freqCount[ltrS] + 1 || 1;
  }
  for (let ltrT of t) {
    if (freqCount[ltrT.toLowerCase()]) {
      sorted.push(ltrT.toLowerCase().repeat(freqCount[ltrT.toLowerCase()]));
    } else if (freqCount[ltrT.toUpperCase()]) {
      sorted.push(ltrT.toUpperCase().repeat(freqCount[ltrT.toUpperCase()]));
    }
  }
  return sorted.join("");
}

sortByStrings("weather", "therapyw"); // "theeraw"
sortByStrings("wEaThEr", "tHeRaPyW"); // "ThEEraw"
sortByStrings("good", "odg"); // "oodg"

/*
Question 3 -- changePossibilities(amount,amount): 
Your quirky boss collects rare, old coins. 
They found out you're a programmer and asked you to solve something they've been wondering for a long time. 
Write a function that, given an amount of money and an array of coin denominations, 
computes the number of ways to make the amount of money with coins of the available denominations. 

Example: 
for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), 
your program would output 4—the number of ways to make 4¢ with those denominations: 

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

/*
Inputs: number (amount), array (denominations)
Output: number of ways to make amount with denominations
Edgecases: amount < 1, sorted array?

* can solve using dynamic programming tabulation *
*/

/*
Pseudocode:
- declare table array with amount of n + 1
- fill table with 0s
- set first table ele to 1
- for each num in input array
  - begin iteration at table index === num
  - add table ele at current index - num to current table ele 
- return table at index num
*/

function changePossibilities(amount, denominations) {
  if (amount < 1) return 0;
  let tbl = new Array(amount + 1).fill(0);
  tbl[0] = 1;
  for (let i = 0; i < denominations.length; i++) {
    const curr = denominations[i];
    for (let j = curr; j < tbl.length; j++) {
      tbl[j] += tbl[j - curr];
    }
  }
  return tbl[amount];
}

changePossibilities(4, [1, 2, 3]); // 4
changePossibilities(5, [1, 2, 3]); // 5
changePossibilities(5, [1, 2, 3, 5]); // 6
changePossibilities(10, [2, 4, 5]); // 4
changePossibilities(1, [2, 3]); // 0
changePossibilities(0, [1, 2, 3]); // 0
changePossibilities(-1, [1, 2, 3]); // 4

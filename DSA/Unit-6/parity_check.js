/*
Description :
Given an array containing N elements, you have to find the absolute difference between the number of odd and even elements in an array.


Input :
The first line contains integer numbers N - the size of the array.
The second-line contains N integer numbers a1, a2, ... aN — elements of the array.

Constraints :
1 <= N <= 10^4
1 <= a[i] <= 10^4

Output :
Print the absolute difference between the number of odd and even elements.

5
1 2 3 4 5       ---> 1
4
5 7 4 6         ---> 0

Hint :
For the first sample,1, 2, 3, 4, 5
Number of even elements = 2 and 4 = 2
Number of odd elements = 1, 3, and 5 = 3
Therefore absolute difference is 1

For the second sample, 5, 7, 4, 6
Number of even elements = 4 and 6 = 2
Number of odd elements = 5 and 7 = 2
Therefore absolute difference is 0.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  parityCheck(n, arr);
}

function parityCheck(n, arr) {
  var even = 0;
  var odd = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(Math.abs(even - odd));
}

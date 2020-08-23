

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

var runningSum = function(nums) {
    var total = 0;
    var results = [];
    for (var i = 0; i < nums.length; i++){
        total += nums[i];
        results.push(total);
    }
    return results;
};



// input of an array of numbers, output of an array of sums of all numbers prior



//assert arrays equal
function assertArraysEqual(actual, expected, testName){
    var equalLength = (actual.length === expected.length)
    var equalValues = true;
    for (var i = 0; i < expected.length; i++){
        if (actual[i] !== expected[i]){
            equalValues = false;
        }
    }
    console.log(equalLength && equalValues ? 'passed' : 'failed ' + testName + '. Expected ' + expected + ', but got ' + actual + '.')
    // console.log(JSON.stringify(actual) === JSON.stringify(expected) ? 'passed' : 'failed ' + testName + '. Expected ' + expected + ', but got ' + actual '.')
}




//test cases

let input1 = [1,4,3]
let expected1 = [1,5,8]
let actual1 = runningSum(input1)

let input2 = [1,1,1,1,1]
// POST YOUR SOLUTION IN THE THREAD

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

nums = [1, 2, 3, 4]

function runningSum(arr) {
    let arrOne = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
        arrOne.push(sum)
    }
    return arrOne
}

console.log(runningSum(nums))
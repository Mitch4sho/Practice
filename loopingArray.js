// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.


var array = [1, 0, 1];


// my solution 
var findMaxConsecutiveOnes = function (nums) {
    var consecutiveCount = 0;
    var largest = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums.length <= 3 && nums[i] == 1) {
            consecutiveCount++;
            largest = consecutiveCount;
        }
        if (nums[i - 1] == 1 && nums[i] == 1) {
            if (consecutiveCount == 0) {
                consecutiveCount++;
            }
            consecutiveCount++;

            if (consecutiveCount > largest) {
                largest = consecutiveCount;
            }
        } else {
            consecutiveCount = 0;
        }
    }
    return (largest);
};
findMaxConsecutiveOnes(array);


// Solutions I found online

var findMaxConsecutiveOnes = function (nums) {
    let consecutiveOnes = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            consecutiveOnes += 1;
            max = Math.max(max, consecutiveOnes);

        } else {
            consecutiveOnes = 0;
        }
    }
    console.log(max);
}
findMaxConsecutiveOnes(array);
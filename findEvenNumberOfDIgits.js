// Given an array nums of integers, return how many of them contain an even number of digits.


// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.


var input = [12, 345, 2, 6, 7896];

var findNumbers = function (nums) {
    var numberWEvenDigits = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= 1) {
            var count = 0;
            while (nums[i] / 10 >= 0.1) {
                nums[i] /= 10;
                count++;
            }
        }
        if (count % 2 == 0) {
            numberWEvenDigits++;
        }
    }
    return numberWEvenDigits
};

findNumbers(input);





// function digits_count(n) {
//     var count = 0;
//     if (n >= 1) ++count;

//     while (n / 10 >= 1) {
//         n /= 10;
//         ++count;
//     }

//     return count;
// }
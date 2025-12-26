function findLargest(nums) {
    let largestNum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largestNum) {
            largestNum = nums[i];
        }
    }
    return largestNum;
}

let nums = [1, 5, 71, 60, 65, 22, 17, 18, 90, -1];
console.log(findLargest(nums));


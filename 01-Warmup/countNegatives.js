function countNegativeElements(nums) {
    let negativeCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negativeCount++;
        }
    }
    return negativeCount;
}



let nums = [1, 5, -6, -7, 3, -2, 10];
console.log(countNegativeElements(nums))
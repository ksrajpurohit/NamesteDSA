function findNumIndex(nums, num) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == num) {
            return i;
        }
    }
    return -1
}

let nums = [1, 5, -6, -7, 3, -2, 10];
let num = 10;

console.log(findNumIndex(nums, num))


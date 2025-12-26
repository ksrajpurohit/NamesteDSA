function findSecondLargest(nums) {
    if(nums.length < 2){
        return null;
    }
    let largestNum = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largestNum) {
            secondLargest = largestNum;
            largestNum = nums[i];
        }
        else if (nums[i] > secondLargest && nums[i] != largestNum) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

// let nums = [1, 5, 90, 60, 65, 22, 17, 18, 71, -1, 100, 102, 101];
console.log(findSecondLargest([19, 10, 20, 20]));


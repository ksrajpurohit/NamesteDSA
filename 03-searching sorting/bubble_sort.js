function bubbleSort(nums) {
    let swapped = false;
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = 0; j < nums.length - 1 - i; j++){
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

let arr = [4, 5, 7, 9, 1, 4, 10]

bubbleSort(arr)
console.log(arr)
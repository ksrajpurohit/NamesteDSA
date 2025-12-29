function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        for (let j = i; j > 0; j--) {
            if (nums[j - 1] > nums[j]) {
                let temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
            }
            else {
                break;
            }
        }
    }
}


function insertionSort2(nums) {
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let prev = i - 1;
        while (prev>=0 && nums[prev] > current) {
            nums[prev + 1] = nums[prev]
            prev--;
        }
        nums[prev + 1] = current;
    }
}


let arr = [4, 5, 7, 9, 1, 4, 10]


insertionSort(arr)
console.log(arr)
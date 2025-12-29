function selectionSort(nums) {

    for (let i = 0; i < nums.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }

        if (min != i) {
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }

    }

}

let arr = [4, 5, 7, 9, 1, 4, 10]

selectionSort(arr)
console.log(arr)
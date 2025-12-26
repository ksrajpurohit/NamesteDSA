function findSmallest(nums){
    let smallest = Infinity;

    for(let i=0; i<nums.length; i++){
        if(nums[i] < smallest){
            smallest = nums[i];
        }
    }
    return smallest;
}

let nums = [1, 5, 71, 60, 65, 22, 17, 18, 90, -1];
console.log(findSmallest(nums));








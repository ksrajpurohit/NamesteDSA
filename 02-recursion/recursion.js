
let nums = [1, 3,5, 6]


function sum(arr, n) {

    if (n == 0) return arr[n];

    return arr[n] + sum(arr, n-1);

}


console.log(sum(nums, nums.length - 1))



function sumOdd(arr, n) {

    if (n == 0) return (arr[n] % 2 != 0? arr[n] : 0);

    return (arr[n] % 2!=0? arr[n]: 0) + sum(arr, n-1);

}

console.log(sumOdd(nums, nums.length - 1))


function factorial(n) {
    if (n == 1) return 1;

    return n * factorial(n-1)
}

console.log(factorial(5))
function linearSearch(num) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == num) return i;
    }
    return -1;
}

let arr = [4, 5, 7, 9, 1, 4, 10]

console.log(linearSearch(10))
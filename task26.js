function concatArray(arr, ...args) {
    return [...arr, ...args]
}
console.log(concatArray([1, 2, 3], 4, 5))

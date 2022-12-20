let arr = [1, 2, 3];

function concatArrays() {
    return [].concat(...arguments)
}

console.log(concatArrays(arr, arr, arr))

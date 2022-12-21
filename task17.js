let arr = [1, 2, 3];

function concatArrays() {
    let result = [];
    for (arg of arguments) {
        result = [...result, ...arg];
    }
    return result;
}

console.log(concatArrays([0, -1, +1], [-7, 12, 44], [2, 3, 5]))

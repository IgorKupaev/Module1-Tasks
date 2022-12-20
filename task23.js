const arr =  ['aaa', 'bbb', 'ccc', 'aaa', 'bbb', 'aaa'];

function calcSameItems(arr) {
    let library = {};
    for (let item of arr) {
        if (library[item] !== undefined) {
            library[item] += 1;
        } else {
            library[item] = 1;
        }
    }
    return library;
}

console.log(calcSameItems(arr));

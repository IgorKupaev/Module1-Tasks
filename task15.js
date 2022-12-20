const arr = [1, 2, 3, 4];

function restructureArray(array, filterCallback, mapCallback) {
    return array.filter(filterCallback).map(mapCallback);
}

console.log(restructureArray(arr, (e) => e % 2 == 0, (e) => e * 2));

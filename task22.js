const customSlice = (arr, start, end) => arr.slice(start, ++end);

console.log(customSlice([13, 14, 32, 23, 34, 21, 44, 47, 86], 4, 6))

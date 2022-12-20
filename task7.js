const nums = [5,10, 15, 20, 10, 25, 20, 30, 15];

function getSumTo(nums, endPoint) {
    let result = 0;
    for (let i = 0; i < nums.length && result < endPoint; i++) {
        result += nums[i];
    }
    return result;
}

console.log(getSumTo(nums, 55));

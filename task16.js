const num = '+89282110876';

function formatNumber(n) {
    n = n.split("").reverse().join("");
    let part1 = n.slice(7, 10).split("").reverse().join("");
    let part2 = n.slice(4, 7).split("").reverse().join("");
    let part3 = n.slice(2, 4).split("").reverse().join("");
    let part4 = n.slice(0, 2).split("").reverse().join("");
    if (n[n.length - 1] === "+") {
        numCode = n.slice(10, n.length).split("").reverse().join('');
    } else {
        numCode = n.slice(10, 11);
    }
    return `${numCode} ${part1} ${part2}-${part3}-${part4}`;
}

console.log(formatNumber(num))

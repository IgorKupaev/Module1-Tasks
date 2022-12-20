const num = '88005553535';

function formatNumber(n) {
    return `8 ${n.slice(1, 4)} ${n.slice(4, 7)}-${n.slice(7, 9)}-${n.slice(9, 11)}`;
}

console.log(formatNumber(num))

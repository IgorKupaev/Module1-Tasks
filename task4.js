function fibArray(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    if (n <= 2) {
        return [a, b].splice(0, n);
    }
    const result = [a, b];
    for (let i = 3; i <= n; i++) {
        c = a + b;
        result.push(c);
        a = b;
        b = c;
    }
    return result;
}

console.log(fibArray(12));

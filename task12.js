function getSquareTable() {
    let table = [];
    for (let i = 0; i <= 100; i++) {
        let line = []
        for (let j = 0; j <= 100; j++) {
            line.push(`${i}${j}` ** 2)
        }
        table.push(line);
    }
    return table;
}

console.table(getSquareTable())

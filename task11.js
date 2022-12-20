function getMultiplicationTable() {
    const table = [];
    for (let i = 0; i <= 10; i++) { // Верхний уровень
        let line = [];
        for (let j = 0; j <= 10; j++) {
            line.push(i * j);
        }
        table.push(line);
    }
    return table;
}

console.table(getMultiplicationTable())

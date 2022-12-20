function makeOperation(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        case '**':
            return a ** b;
            break;
        case '%':
            return a % b;
            break;                        
        default:
            return -1;
            break;
    }
}

console.log(makeOperation(10, 2, '**'))

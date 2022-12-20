const transactions = [{ from: 'Ivan', to: 'Oleg', amount: 2500},
                    { from:'Ivan', to: 'Igor', amount: 2000},
                    { from: 'Oleg', to: 'Igor', amount: 1500}];

function calcDiff(arr) {
    let amount = 0;
    for (let obj of arr) {
        amount += obj.amount;
    }
    amount = amount / arr.length;
    
    return arr.map(item => {
        return {...item, diff: item.amount - amount}
    })
}

console.log(calcDiff(transactions));

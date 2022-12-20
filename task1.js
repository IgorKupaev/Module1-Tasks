const list = [{name: 'Milk', price: 20, amount: 15},
            {name: 'Coffe', price: 30, amount: 17},
            { name: 'Tea', price: 10, amount: 14 }]; 
function getTotal(list) {
    return list.map(item => {
        return {name: item.name, total: item.price * item.amount}
    });
};
console.log(getTotal(list))

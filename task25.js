function snakeToCamel(str) {
    let arr = str.toLowerCase().split('_');
    return arr.map((item, index) => {
        if (index !== 0) {
            item = item.split('');
            item[0] = item[0].toUpperCase();
            return item.join('');
        }
        return item;
    }).join('');
}

console.log(snakeToCamel('find_and_replace_element_of_array')) 

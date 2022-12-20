const arr = ['hello', 'world', true, 123, () => {}, null, 123, undefined];

function getTypes(arr) {
    return arr.map(item => {
        let type = typeof item;
        switch (type) {
            case 'string':
              return ( 'Это строка' );
              break;
            case 'number':
              return ( 'Это число' );
              break;
            case 'boolean':
              return ( 'Это булево значение' );
              break;
            default:
              return ( "Неизвестное значение" );
          }
    })
}

console.log(getTypes(arr));

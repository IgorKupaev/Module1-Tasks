const strings = ['hello', 'world', 'js'];

function logStrings(arr) {
    while(strings.length > 0) {
        console.log(arr.pop());
    }
} 

logStrings(strings);

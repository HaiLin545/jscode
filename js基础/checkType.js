
function getType(value) {
    if (value === null) {
        return 'null';
    } else if (typeof value === 'object') {
        let types = Object.prototype.toString.call(value);
        let type = types.split(" ")[1].split('');
        type.pop();
        return type.join('');
    } else {
        return typeof value;
    }

}

function F(value) {
    this.value = value;
}

var t = {
    a: 1,
    b: 2
}

console.log('null', getType(null));
console.log('undefined', getType(undefined));
console.log('1', getType(1));
console.log('fn', getType(F));
console.log('obj', getType(t));
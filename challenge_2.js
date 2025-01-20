// reverse an array

function reverseArray(array) {
    var result = "[";
    for (let i = array.length; i > 0; i --) {
        if (i > 1) {
            result += i + ", ";
        } else {
            result += i;
        }
    }
    return result += "]";
}

const array = [1, 2, 3];
let answer = reverseArray(array);
console.log("Reverse array: " + answer);
// count how many time character appears

function characterCount(text, char) {
    let arrayChar = text.split("");
    let count = 0;
    for (let i = 0; i < arrayChar.length; i++) {
        if (char === arrayChar[i]) {
            for (let j = 0; j < arrayChar.length; j++) {
                if (arrayChar[i] === arrayChar[j]) {
                    count += 1;
                }
            }
            break;
        }
    }
    return count;
}

let text = "hello world";
let result = characterCount(text, 'm');
console.log(result);

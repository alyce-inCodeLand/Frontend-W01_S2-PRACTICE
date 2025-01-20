// words count
function wordsCount(text) {
    let arrayWords = text.split(" ");
    return arrayWords;
}

let text = "hello world";
let result = wordsCount(text);
console.log(result.length);
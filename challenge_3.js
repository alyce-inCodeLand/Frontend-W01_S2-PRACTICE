// calculate average score
function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum/array.length;
}

const score = [85, 90, 78, 92];
let result = calculateAverage(score);
console.log(result);
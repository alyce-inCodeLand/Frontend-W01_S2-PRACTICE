

function challenge1(width, height) {
    let rectangleString = "";
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            rectangleString += "*";
        }
        rectangleString += "\n";
    }
    return rectangleString;
}

var result = challenge1(3, 5);
console.log(result);
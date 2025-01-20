// count votes
function votesCount (votes) {
    let a = 0;
    let b = 0;
    let c = 0;
    let result = "";

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === 'A') {
            a += 1;
        } else if (votes[i] === 'B') {
            b += 1;
        } else {
            c += 1;
        }
    }

    if (votes.length == 0) {
        result = "There is no vote yet!";
    } else {
        if (a >= b && a >= c) {
            result = "A is the winner!";
            if (a == b) {
                result = "A and B are both winners!";
            } else if (a == c) {
                result = "A and C are both winners!";
            }
        } else if (b >=  a && b >= c) {
            result = "B is the winner!";
            if (b == c) {
                result = "B and C are both winners!";
            }
        } else if (c > a && c > b) {
            result = "C is the winner!";
        }

    }


    return result;

}

let votes = ['A', 'B', 'B', 'A', 'C'];
let result = votesCount(votes);

console.log(result);
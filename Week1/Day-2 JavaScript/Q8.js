// Also tell the user if they are legal to vote or not.

function canVote(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(canVote(20));
console.log(canVote(16));   
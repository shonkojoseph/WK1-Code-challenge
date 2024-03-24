// The function is used to define the speed limits of the car and the kilomiter covered
// The "If" is used to check the speed whether is less, greater or equall to the speed limit
// The "return" gives the feedback of the statement given
// The "const" calculates and check the points


function lookAtSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
if (speed <= speedLimit){
    return "Ok";
}
else{
    const points = Math.floor((speed - speedLimit) / 5)
    if (points >= 12){
        return ("Licence suspended");
    }
    else {
        return `${points}  points`
    }
}
// used to test the speed of the function

console.log(lookAtSpeed(80));
console.log(lookAtSpeed(60));
console.log(lookAtSpeed(50));

}

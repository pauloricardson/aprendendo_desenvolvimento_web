// function checkSpeed(speed) {
//     if (speed <= 65) {
//         console.log(speed);
//     } else if (speed >= 66 && speed <= 70) {
//         console.log("Points: 1");
//     } else if (speed > 70 && speed <= 75) {
//         console.log("Points: 2");
//     } else if (speed > 75 && speed <= 80) {
//         console.log("Points: 3");
//     } else if (speed > 80 && speed <= 85) {
//         console.log("Points: 4");
//     } else if (speed > 85 && speed <= 90){
//         console.log("Points: 5");
//     } else {
//         console.log("Licence suspended");
//     }
// }

// checkSpeed(100);

function checkSpeed(speed) {
    const speedLimit = 60;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint)
        console.log(speed);
    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint - 0.1);
        if (points > 5)
            console.log('License Suspended');
        else
            console.log('points: ', points);
    }
}

checkSpeed(91);
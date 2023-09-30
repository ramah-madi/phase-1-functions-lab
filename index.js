// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance > 42){
     return distance - 42;
    }
    else {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination){
     if (destination > start){
    return (destination - start) * 264;
     }
     else {
        return (start - destination) * 264;
     }
}

function calculatesFarePrice(start, destination) {
     const distanceInFeet = distanceTravelledInFeet(start, destination);
     if (distanceInFeet <= 400){
        return 0;
     }
     else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        return 2.56;
     }
     else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
        return 25;
     }
     else {
        return 'cannot travel that far'
     }
}
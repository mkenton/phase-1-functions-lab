// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
 return Math.abs(pickup-42);
}

function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup);
    return blocks*264;
}

function distanceTravelledInFeet(pickup,dropoff) {
    const blocks = Math.abs(pickup-dropoff);
    return blocks*264;
}

function calculatesFarePrice(pickup,dropoff) {
    const feetTraveled = distanceTravelledInFeet(pickup,dropoff)
    if (feetTraveled < 400){
        return 0;
    }
    else if (feetTraveled >= 400 && feetTraveled <=2000) {
        return (feetTraveled-400)*0.02;
    }
    else if (feetTraveled > 2000 && feetTraveled <=2500) {
        return 25;  
    }
    else if (feetTraveled > 2500) {
        return "cannot travel that far"
    }
}
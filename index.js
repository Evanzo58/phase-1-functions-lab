function distanceFromHqInBlocks(someValue) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet)
}

function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(street - 42) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
}

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34, 42));

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    let distance = Math.abs(destination - start) * feetPerBlock;

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <= 2500){
        return 25;
    }else{
        return "cannot travel that far";
    }
}

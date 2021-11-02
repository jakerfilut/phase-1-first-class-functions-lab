// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return  drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4)
}
let selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers]

function createFareMultiplier(multi){
    return function(fare){
        return fare * multi
    }
}

const fareDoubler = (createFareMultiplier(2))
const fareTripler = (createFareMultiplier(3))

function selectDifferentDrivers(drivers, temp){
    return temp(drivers);
}
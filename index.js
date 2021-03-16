
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function(fare) {
    return fare*num;
  }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, firstLast) {
  return firstLast(drivers);
}

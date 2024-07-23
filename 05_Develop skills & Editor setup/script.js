'use strict';

// const x = 23;
// const calcAge = birthYear => 2037 - birthYear;

const calcTemprature = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);
};
calcTemprature([3, 4, 5, 45, 67, 3, 0]);

//Debugging with the Console and Breakpont.........................

const measureakalvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // {C}Fix
    // value:Number( prompt('Degree celcius:')),
  };
  //  {B}  FIND
  console.log(measurement);
  // console.table(measurement)
  // console.warn(measurement)
  // console.error(measurement)
  const Kelvin = measurement.value + 273;
  // console.log(typeof Kelvin);
  return Kelvin;
};
// {A} IDENTIFY
console.log(measureakalvin());

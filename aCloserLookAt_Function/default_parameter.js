"use strict";
const bookings = [];
const createBooking = function (flightNum, numPssanger = 1, price = 199 * numPssanger) {
  //    ES5
  // numPssanger = numPssanger || 1;
  // price = price || 199;


  const booking = {
    flightNum,
    numPssanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LG123");
createBooking("LG123", 56, 800);
createBooking("LG123", 56);

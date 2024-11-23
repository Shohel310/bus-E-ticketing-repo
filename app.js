// /* seat number*/ 

// const seatNumber = document.getElementById("A1").innerText;
// const convertedSeatNum = parseInt(seatNumber);

// // /* seat Price */ 
// const seatPrice = document.getElementById("per-seat").innerText;
// const convertedPrice = parseInt(seatPrice);
// // console.log(seatNumber, seatPrice);

// const seatLeft = document.getElementById("seats-left");
// const convertedSeatLeft = parseInt(seatLeft);
const seatLeft = getConvertedValue("seats-left"); 

const seatCounter = getConvertedValue("seat-counter");

function getConvertedValue(id) {
    const seatPrice = document.getElementById(id).innerText;
    const convertedPrice = parseInt(seatPrice);
    return convertedPrice;
}

const result = getConvertedValue("seat-counter");
console.log(result);


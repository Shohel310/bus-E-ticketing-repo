// /* seat number*/ 

// const seatNumber = document.getElementById("A1").innerText;
// const convertedSeatNum = parseInt(seatNumber);

// // /* seat Price */ 
// const seatPrice = document.getElementById("per-seat").innerText;
// const convertedPrice = parseInt(seatPrice);
// // console.log(seatNumber, seatPrice);

// const seatLeft = document.getElementById("seats-left");
// const convertedSeatLeft = parseInt(seatLeft);
const allSeat = document.getElementsByClassName("seat");

for (const seat of allSeat) {
    seat.addEventListener("click", function(event) {
        const a1 = event.target.parentNode.childNodes[5].innerText; 

        const a2 = event.target.parentNode.childNodes[7].innerText;
        
        const a3 = event.target.parentNode.childNodes[9].innerText;

        const a4 = event.target.parentNode.childNodes[11].innerText;

        const selectedContainer = document.getElementById("selected-append");
// creating div
        const div = document.createElement("div");

        // creating p

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;
// append info
        div.append(p1)
        div.append(p2)
        div.append(p3)

        // console.log(a1,a2,a3,a4);
    })
}

// console.log(allSeat);




const seatLeft = getConvertedValue("seats-left"); 

const seatCounter = getConvertedValue("seat-counter");

function getConvertedValue(id) {
    const seatPrice = document.getElementById(id).innerText;
    const convertedPrice = parseInt(seatPrice);
    return convertedPrice;
}

const result = getConvertedValue("seat-counter");
console.log(result);


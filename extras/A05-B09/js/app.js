// console.log('check app.js')

const selectedSeats = document.getElementById('selected-seats');
const totalSelected = document.getElementById('total-selected');
const availableSeats = document.getElementById('available-seat');
const getSetTotalPrice = document.getElementById('total-price');
const couponField = document.getElementById('coupon-field');
const couponButton = document.getElementById('coupon-btn');
const defaultBookingText = document.getElementById('default-text');
const grandTotal = document.getElementById('grand-total');
const phoneNumber = document.getElementById('phone-number');
const nextButton = document.getElementById('next-btn');

let selectedArr = [];
let totalPrice = 0;

function handleSelectSeat(event) {
    const value = event.innerText;
    if (selectedArr.includes(value)) {
        return alert(`Seat '${value}' Already Selected!`);
    } else if (selectedArr.length < 4) {
        // console.log(event);
        event.classList.add('bg-primary');
        event.classList.add('text-white');
        selectedArr.push(event.innerText);
        // console.log(selectedArr);
        totalSelected.innerText = selectedArr.length;

        // decrease seats
        const availableSeatsValue = parseFloat(availableSeats.innerText);
        availableSeats.innerText = availableSeatsValue - 1;

        // remove default booking text
        defaultBookingText.classList.add('hidden');

        // selection
        selectedSeats.innerHTML += `
        <li class="text-base font-normal flex justify-between">
            <span>${event.innerText}</span>
            <span>Economy</span>
            <span>550</span>
        </li>`

        totalPrice += 550;
        getSetTotalPrice.innerText = totalPrice.toFixed(2);

        if (selectedArr.length === 4) {
            couponButton.removeAttribute('disabled');
            couponField.removeAttribute('disabled');
        }
    } else {
        return alert('Exceeded Booking Limit of 4 Seats!');
    }
}


document.getElementById('coupon-btn').addEventListener('click', function() {
    const couponInput = couponField.value;
    let discountFromCoupon = 0;
    // console.log(couponInput);

    if (couponInput !== 'NEW50' && couponInput !== 'Couple 20') {
        alert('Invalid Coupon Entered!');
        return;
    }

    if (couponInput === 'NEW50') {
        discountFromCoupon = totalPrice * .50;
    } else if (couponInput === 'Couple 20') {
        discountFromCoupon = totalPrice * .20;
    }

    const showCouponPrice = document.getElementById('show-coupon-price');
    showCouponPrice.innerHTML = `
        <p>Discount</p>
        <p>
            <span>-BDT: </span>
            <span>${discountFromCoupon}</span>
        </p>
    `


    const grandTotalValue = totalPrice - discountFromCoupon;
    grandTotal.innerText = grandTotalValue.toFixed(2);
});

phoneNumber.addEventListener('input', function(event) {
    const inputValue = event.target.value;
    if (inputValue.length >= 11) {
        nextButton.removeAttribute('disabled');
    }
})

document.getElementById('btn-continue').addEventListener('click', function() {
    window.location.reload();
})
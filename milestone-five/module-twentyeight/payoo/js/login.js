console.log('login js added');

document.getElementById('button-login').addEventListener('click', function (event) {
    console.log("login button clicked");

    event.preventDefault(); // to minimise prevent page load

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // random login
    if (phoneNumber === '017' && pinNumber === '1234') {
        console.log(`You're logged in!`);
        window.location.href = './home.html';
    } else {
        alert('Validation Error! Try again.');
    }

});
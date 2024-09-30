document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const withdrawAmount = document.getElementById('amount-withdraw').value;
    const withdrawPin = document.getElementById('pin-withdraw').value;

    if (withdrawPin === '1234') {
        const balance = document.getElementById('current-balance').innerText;

        const updatedBalance = parseFloat(balance) - parseFloat(withdrawAmount);

        document.getElementById('current-balance').innerText = updatedBalance;

        document.getElementById('amount-withdraw').value = '';
        document.getElementById('pin-withdraw').value = '';
    } else {
        alert('Something Error! Try again.');
    }
})
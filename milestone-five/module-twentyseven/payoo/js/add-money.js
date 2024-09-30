// console.log('add-money js added')

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('button clicked');

    const amountEntered = document.getElementById('amount-entered').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (pinNumber === '1234') {
        const balance = document.getElementById('current-balance').innerText;
        
        const updatedBalance = parseFloat(amountEntered) + parseFloat(balance);

        document.getElementById('current-balance').innerText = updatedBalance;

        document.getElementById('amount-entered').value = '';
        document.getElementById('pin-number').value = '';
    } else {
        alert('Something Error! Try again.')
    }
})
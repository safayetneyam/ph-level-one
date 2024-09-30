// console.log('add-money js added')

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amountEntered = getInputValueById('amount-entered');
    const pinNumber = getInputValueById('pin-number');

    if (isNaN(amountEntered)) {
        alert('Wront Amount!');
        return
    }

    if (pinNumber === 1234) {
        const currentBalance = getTextValueById('current-balance');
        const updatedBalance = amountEntered + currentBalance;
        document.getElementById('current-balance').innerText = updatedBalance;

        // adding transactions history
        const history = document.createElement('p');
        history.innerText = `Added: ${amountEntered} BDT. New Balance: ${updatedBalance}`;
        document.getElementById('transactions-details').appendChild(history);
    } else {
        alert('Something Error! Try again.')
    }
})
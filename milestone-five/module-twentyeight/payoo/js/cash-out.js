document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const withdrawAmount = getInputValueById('amount-withdraw');
    const withdrawPin = getInputValueById('pin-withdraw');

    if (isNaN(withdrawAmount)) {
        alert('Wront Amount!');
        return
    }

    if (withdrawPin === 1234) {
        const currentBalance = getTextValueById('current-balance');

        if (withdrawAmount <= 0 || withdrawAmount > currentBalance) {
            alert('Wrong Amount!');
        } else {
            const updatedBalance = currentBalance - withdrawAmount;
            document.getElementById('current-balance').innerText = updatedBalance;

            const div = document.createElement('div');
            div.classList.add('bg-red-200');
            div.innerHTML = `
                <p>Withdrew: ${withdrawAmount} BDT. New Balance: ${updatedBalance}</p>
            `
            document.getElementById('transactions-details').appendChild(div);
        }
    } else {
        alert('Something Error! Try again.');
    }
})
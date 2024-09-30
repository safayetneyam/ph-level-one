
// getting value by id

function getInputValueById(id) {
    const value = document.getElementById(id).value;
    return parseFloat(value);
}

function getTextValueById(id) {
    const value = document.getElementById(id).innerText;
    return parseFloat(value);
}

function showSectionById(id) {
    document.getElementById('form-add-money').classList.add('hidden');
    document.getElementById('form-cash-out').classList.add('hidden');
    document.getElementById('transactions-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
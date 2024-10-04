

// only show a particular option 
// Either Donation or Hisotry

function showOptionById(id) {
    // hiding section
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function getInputFieldById(inputId) {
    const value = document.getElementById(inputId).value;
    return parseFloat(value);
}

function getTextFieldById(textId) {
    const text = document.getElementById(textId).innerText;
    return parseFloat(text);
}

function archiveHistory(amount, title) {
    const div = document.createElement('div');
    const donationTitle = document.getElementById(title).innerText;
    div.innerHTML = `
            <p>${donationTitle} is Accepted!</p>
            <p>Amount is BDT ${amount}</p>
            <p>${new Date()}</p>
        `;
    div.classList.add('border-2', 'border-gray-300', 'rounded-xl', 'p-5');
    document.getElementById('history-archive').appendChild(div);
}



// ===========================
// OTHER MINOR FUNCTIONALITIES
// ===========================

function buttonChange(idExt) {
    // button change
    document.getElementById('display-donation').classList.remove('bg-green', 'bg-white');
    document.getElementById('display-history').classList.remove('bg-green', 'bg-white');
    document.getElementById(idExt).classList.add('bg-green');

    if (idExt === 'display-donation') {
        document.getElementById('display-donation').classList.remove('border-gray-300', 'text-secondary');
        document.getElementById('display-history').classList.remove('text-primary', 'border-none');

        document.getElementById('display-donation').classList.add('text-primary', 'border-none');
        document.getElementById('display-history').classList.add('bg-white', 'border-gray-300', 'text-secondary');
    } else {
        document.getElementById('display-donation').classList.remove('border-none', 'text-primary');
        document.getElementById('display-history').classList.remove('text-secondary', 'border-gray-300');

        document.getElementById('display-donation').classList.add('bg-white', 'border-gray-300', 'text-secondary');
        document.getElementById('display-history').classList.add('text-primary');
    }
}

function fixTheFooter() {
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('footer').classList.add('sticky', 'bottom-0', 'left-0', 'right-0');
}

function unfixTheFooter() {
    document.getElementById('footer').classList.remove('sticky', 'bottom-0', 'left-0', 'right-0');
}
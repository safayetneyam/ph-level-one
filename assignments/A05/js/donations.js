
// relief - noakhali

document.getElementById('btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const inputNoakhali = getInputFieldById('input-noakhali');
    const collectionOfNoakhali = getTextFieldById('collection-noakhali');
    const accountBalance = getTextFieldById('account-balance');

    if (!isNaN(inputNoakhali) && inputNoakhali > 0 && inputNoakhali <= accountBalance) {
        const leftBalance = accountBalance - inputNoakhali;
        const totalCollection = collectionOfNoakhali + inputNoakhali;
        
        document.getElementById('account-balance').innerText = leftBalance;
        document.getElementById('collection-noakhali').innerText = totalCollection;

        document.getElementById('modal-noakhali').showModal();
        document.getElementById('input-noakhali').value = '';

        archiveHistory(inputNoakhali, 'title-noakhali');
    } else {
        return alert('Invalid Donation Amount!')
    }
});

// remine - feni

document.getElementById('btn-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const inputFeni = getInputFieldById('input-feni');
    const collectionOfFeni = getTextFieldById('collection-feni');
    const accountBalance = getTextFieldById('account-balance');

    if (!isNaN(inputFeni) && inputFeni > 0 && inputFeni <= accountBalance) {
        const leftBalance = accountBalance - inputFeni;
        const totalCollection = collectionOfFeni + inputFeni;
        
        document.getElementById('account-balance').innerText = leftBalance;
        document.getElementById('collection-feni').innerText = totalCollection;

        document.getElementById('modal-feni').showModal();
        document.getElementById('input-feni').value = '';

        archiveHistory(inputFeni, 'title-feni');
    } else {
        return alert('Invalid Donation Amount!')
    }
});

// aid - quota protest

document.getElementById('btn-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const inputQuota = getInputFieldById('input-quota');
    const collectionOfQuota = getTextFieldById('collection-quota');
    const accountBalance = getTextFieldById('account-balance');

    if (!isNaN(inputQuota) && inputQuota > 0 && inputQuota <= accountBalance) {
        const leftBalance = accountBalance - inputQuota;
        const totalCollection = collectionOfQuota + inputQuota;
        
        document.getElementById('account-balance').innerText = leftBalance;
        document.getElementById('collection-quota').innerText = totalCollection;

        document.getElementById('modal-quota').showModal();
        document.getElementById('input-quota').value = '';

        archiveHistory(inputQuota, 'title-quota');
    } else {
        return alert('Invalid Donation Amount!')
    }
});
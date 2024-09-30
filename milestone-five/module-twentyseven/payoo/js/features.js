

document.getElementById('display-cash-out').addEventListener('click', function() {
    document.getElementById('form-cash-out').classList.remove('hidden');
    document.getElementById('form-add-money').classList.add('hidden');
});

document.getElementById('display-add-money').addEventListener('click', function() {
    document.getElementById('form-add-money').classList.remove('hidden');
    document.getElementById('form-cash-out').classList.add('hidden');
})
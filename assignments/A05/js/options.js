
// mark the option to display

document.getElementById('display-donation').addEventListener('click', function() {
    showOptionById('donation-section');
    buttonChange('display-donation');
    unfixTheFooter();
})

document.getElementById('display-history').addEventListener('click', function(event) {
    showOptionById('history-section');
    buttonChange('display-history');
    fixTheFooter();
})


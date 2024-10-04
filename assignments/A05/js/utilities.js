

// only show a particular option 
// Either Donation or Hisotry

function showOptionById(id) {
    // hiding section
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
// OTHER MINOR FUNCTIONALITIES

function buttonChange(idExt) {
    // button change
    document.getElementById('display-donation').classList.remove('bg-green');
    document.getElementById('display-donation').classList.remove('bg-white');
    document.getElementById('display-history').classList.remove('bg-green');
    document.getElementById('display-history').classList.remove('bg-white');
    document.getElementById(idExt).classList.add('bg-green');

    if (idExt === 'display-donation') {
        document.getElementById('display-donation').classList.remove('border-gray-300');
        document.getElementById('display-donation').classList.remove('text-secondary');
        document.getElementById('display-donation').classList.add('text-primary');
        document.getElementById('display-donation').classList.remove('border-gray-300');
        document.getElementById('display-history').classList.remove('text-primary');
        document.getElementById('display-history').classList.add('text-secondary');
        document.getElementById('display-history').classList.add('border-gray-300');
    } else {
        document.getElementById('display-donation').classList.remove('border-none');
        document.getElementById('display-donation').classList.remove('text-primary');
        document.getElementById('display-donation').classList.add('text-secondary');
        document.getElementById('display-donation').classList.add('border-gray-300');

        document.getElementById('display-history').classList.remove('border-gray-300');
        document.getElementById('display-history').classList.remove('text-secondary');
        document.getElementById('display-history').classList.add('text-primary');
    }
}

function fixTheFooter() {
    document.getElementById('footer').classList.add('fixed');
    document.getElementById('footer').classList.add('bottom-0');
    document.getElementById('footer').classList.add('left-0');
    document.getElementById('footer').classList.add('right-0');
}

function unfixTheFooter() {
    document.getElementById('footer').classList.remove('fixed');
    document.getElementById('footer').classList.remove('bottom-0');
    document.getElementById('footer').classList.remove('left-0');
    document.getElementById('footer').classList.remove('right-0');
}
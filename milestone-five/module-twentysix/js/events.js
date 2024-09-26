

// TYPE - II --------> IMPORTANT
function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}


// TYPE - III (I)
const tomatoButton = document.getElementById('make-tomato');
tomatoButton.onclick = makeTomato;

function makeTomato() {
    document.body.style.backgroundColor = 'tomato';
}


// TYPE - III (II)
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// ============= addEventListener =============

// TYPE - IV (I)
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}


// TYPE - IV (II)
const salmonButton = document.getElementById('make-salmon');
salmonButton.addEventListener('click', function makeSalmon() {
    document.body.style.backgroundColor = 'salmon';
});


// TYPE - IV (Final) IMPORTANT
document.getElementById('make-crimson').addEventListener('click', function() {
    document.body.style.backgroundColor = 'crimson';
});



// DEFAULT
document.getElementById('make-default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
})
document.getElementById('make-default').style.paddingRight = '20px';
document.getElementById('make-default').style.paddingLeft = '20px';
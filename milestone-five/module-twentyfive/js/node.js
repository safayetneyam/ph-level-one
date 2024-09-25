const newAreaContainer = document.getElementById('area-container');
console.log(newAreaContainer);
console.log(newAreaContainer.childNodes);

console.log(newAreaContainer.childNodes[3].childNodes[3].innerText);
console.log(newAreaContainer.childNodes[3].childNodes[2].nextSibling.innerText);


// -------------------------- 

const areaUL = document.querySelector('#area-container ul')
console.log(areaUL.innerText);


const newLi = document.createElement('li');
newLi.innerText = 'Cumilla';
// console.log(newLi);

areaUL.appendChild(newLi);
console.log(areaUL.innerText);
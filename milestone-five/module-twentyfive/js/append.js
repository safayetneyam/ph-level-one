console.log('Adding Append JS File')

const fruitList = document.getElementById('fruit-list');
// console.log(fruitList);

const li = document.createElement('li');
li.innerText = 'Tormuj';
fruitList.appendChild(li);
// console.log(fruitList.inner);
 

// ------------------------------------


const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

// 1. create section 2. add headings 3. add ul > list
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Favorite Food Items';

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Makhon Teheri';
const li2 = document.createElement('li');
li2.innerText = 'Bashmati Kacchi';
const li3 = document.createElement('li');
li3.innerText = 'Khashir Rejala';

section.appendChild(h1);
section.appendChild(ul);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

mainContainer.appendChild(section);


// -------------------------------------
// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My Dress Section</h1>
    <ul>
        <li>Informal Attires</li>
        <li>T-Shirt</li>
        <li>Three Quarters</li>
    </ul>
`;

mainContainer.appendChild(sectionDress);
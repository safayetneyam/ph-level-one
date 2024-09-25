console.log('linked JS file\n\n')
let sections = document.querySelectorAll('section');
console.log(sections);

for(const section of sections) {
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightblue';
}

const areaContainer = document.getElementById('area-container');
// areaContainer.style.backgroundColor = 'lightyellow';
areaContainer.classList.add('lightyellow-bg');
areaContainer.classList.remove('text-center');



// Get Element by Id
const header = document.getElementById('header');

// header.innerText = 'Document Object Model Manipulation';
// header.textContent = 'Document Object Model Manipulation';
console.log(header.innerHTML);

// Get Element by Class
const todo = document.getElementsByClassName('todo');

for (let i = 0; i < todo.length; i++) {
    console.log(todo[i]);
}

// Get Element by TagName
const h3 = document.getElementsByTagName('h3');

for (let i = 0; i < h3.length; i++) {
    console.log(h3[i]);
}

// Get Element by Query Selector
const head = document.querySelector('#header');
console.log(head);

const divs = document.querySelectorAll('div');
for (let div of divs) {
    console.log(div);
}

// for (let div in divs) {
//     console.log(div);
// }

// Parent Children Siblings
const parent = document.querySelector('.todo');
const children = parent.children;
console.log(children);

const children2 = document.querySelector('.incomplete-task');
const parent2 = children2.parentElement;
console.log(parent2);
console.log(children2.closest('.todo'));
console.log(children2.nextElementSibling);
console.log(children2.previousElementSibling);

// Manipulating

const divElement = document.createElement('div');
divElement.className = 'created'
divElement.setAttribute('id', 'created');
divElement.innerText = 'Hello Bois'
const parent3 = document.querySelector('.todo')
// parent.appendChild(divElement);
const children3 = document.querySelector('h2')
parent3.insertBefore(divElement, children3);


const myBtn = document.querySelector('button');
const myHeader = document.querySelector('h1');
myBtn.onclick = function() {
    let name = prompt('Enter your name');
    localStorage.setItem('name', name);
    myHeader.textContent = 'Mozilla is fire ' + name;
}
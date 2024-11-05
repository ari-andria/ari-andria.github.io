let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/image-accueil.png') {
      myImage.setAttribute('src', 'images/image-accueil-2.png');
    } else {
      myImage.setAttribute('src', 'images/image-accueil.png');
    }
});

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Mieux dans ta tête, ' + myName;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mieux dans ta tête, ' + storedName;
}

myButton.addEventListener('click', function() {
  setUserName();
});
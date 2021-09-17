console.log("It Works!");

function deleteProfile (event){
    console.log(event.target);
    let entireElement = event.target.closest ('li');
    console.log( entireElement );
    entireElement.remove();
}

let accept = document.querySelectorAll('#yes');
console.log (accept);

let denied = document.querySelectorAll('#no');
console.log (denied);

for (let i = 0; i < accept.length; i++ ){
    accept[i].addEventListener("click", deleteProfile);
}

for (let i = 0; i < denied.length; i++ ){
    denied[i].addEventListener("click", deleteProfile);
}

function reduseNum (event){
    let numLikes = document.querySelector('#menus');
    console.log(numLikes);
    let rest = parseInt(numLikes.textContent);
    console.log(rest); 
    rest -=1;
    numLikes.textContent = rest;
}

for (let i = 0; i < accept.length; i++ ){
    accept[i].addEventListener("click", reduseNum);
}

for (let i = 0; i < denied.length; i++ ){
    denied[i].addEventListener("click", reduseNum);
}

function addNumber (event){
    let addNumLikes = document.querySelector('#plus');
    console.log(addNumLikes);
    let sum = parseInt(addNumLikes.textContent);
    sum +=1;
    addNumLikes.textContent = sum + "+";
}

for (let i = 0; i < accept.length; i++ ){
    accept[i].addEventListener("click", addNumber);
}

/*function changeName( event ){
    let userName = document.querySelector('.name');
    userName.addEventListener('input', nameInput);
    function nameInput(element){
        console.log(element.value);
        userName.innerText = element.value;
    }   
console.log(event);
}    


let profileName = document.querySelector('.editName');
console.log(profileName);

profileName.addEventListener( 'click', changeName );*/

let nameUser = document.querySelector('.name');
console.log(nameUser);

function changeName(event){
    if (nameUser.innerText === "Jane Doe"){
        nameUser.innerText = "Pepita Pérez"
    }
    else{
        nameUser.innerText = "Jane Doe"
    }
}

let profileName = document.querySelector('.editName');
console.log(profileName);

profileName.addEventListener( 'click', changeName );
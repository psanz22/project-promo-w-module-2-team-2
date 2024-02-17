'use strict';

//Bea - Preview
const namePreview = document.querySelector('.js-name-preview');
const jobPreview = document.querySelector('.js-job-preview');
const imagePreview = document.querySelector('.js-image-preview');
const phonePreview = document.querySelector('.js-phone-preview');
const mailPreview = document.querySelector('.js-mail-preview');
const linkedinPreview = document.querySelector('.js-linkedin-preview');
const githubPreview = document.querySelector('.js-github-preview');

//Form-fill
const nameInput = document.querySelector('.js-name');
const jobInput = document.querySelector('.js-job');
const imageInput = document.querySelector('.js-image');
const phoneInput = document.querySelector('.js-phone');
const mailInput = document.querySelector('.js-mail');
const linkedinInput = document.querySelector('.js-linkedin');
const githubInput = document.querySelector('.js-github');

//Desplegables
const headerDesign = document.querySelector('.js-design');
const headerFill = document.querySelector('.js-fill');
const headerShare = document.querySelector('.js-share');

//Containers
const containerDesign = document.querySelector('.js-design-container');
const containerFill = document.querySelector('.js-fill-container');
const containerShare = document.querySelector('.js-share-container');

const form = document.querySelector('.js-form');

/* 
Recoger valor variables de los inputs
Evento para leer lo del input 
Escribirlo en campos del preview
*/


//PASOS QUE HEMOS DADO
/*
1. Seleccionamos el elemento HTML que en este caso es el form y hemos creado la siguiente variable:
            // const form = document.querySelector('.js-form');

2. Escuchamos al evento que es input en el que estamos escribiendo
            //form.addEventListener('input');

3. Creamos la función: que cuando el usuario meta una letra en el input pues ejecute la función

        //function handleInput(event){

        if(event.target.id === "completeName"){
            console.log("hola");
            namePreview.innerHTML = event.target.value;
        }
}

4. Si el cursor detecta que está en input con id = completeName lo que hace es mostrar el valor que se está introduciendo (value) en el name previe

*/

function open(content){
    content.classList.remove('hidden');
}

function close(content1,content2){
    content1.classList.add('hidden');
    content2.classList.add('hidden');
}

const handleArrow1 = () => {
    open(containerDesign);
    close(containerFill,containerShare);

}

headerDesign.addEventListener('click', handleArrow1);



function handleInput(event){
    const eventTarget = event.target.value;
    if(event.target.id === "completeName"){
        namePreview.innerHTML = eventTarget;
    }else if(event.target.id === "job"){
        jobPreview.innerHTML = eventTarget;
    }
    else if(event.target.id === "email"){
        mailPreview.href = "mailto:" + eventTarget;
    }else if(event.target.id === "telephone"){
        phonePreview.href = "tel:" + eventTarget;
    }else if(event.target.id === "linkedin"){
        linkedinPreview.href = eventTarget;
    }else if(event.target.id === "github"){
        githubPreview.href = eventTarget;
    }
}      
form.addEventListener('input', handleInput);



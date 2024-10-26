// header paragraph script
const headerPara = document.querySelector('.word')
const paragraphWord = [
    'Inspiring Readers One Word at a Time!',
    'English Language & Literacy Development Center, Ltd',
    'Love Though Literaracy Project'
]
let index = 0;
setInterval(() => {
    index++
    if(index === 3){
        index = 0
    }
    headerPara.innerHTML = paragraphWord[index]

}, 4000);

// Script for menu responsiveness
const menu = document.querySelector('.menu-btn')
const deletebtn = document.querySelector('.delete-btn')

// Code for displaying and hiding the menu
document.querySelector("body").addEventListener("click", (e)=>{
    // Check if the event come from the menu or menu drowpdown or delete btn or something else
    if(e.target.dataset.menu != "menu"){
        // If there is that classlist then remove it
        menu.classList.remove("active")
    }else if(e.target.dataset.menu ==="menu"){
        // Add the class list
        menu.classList.toggle("active")
    }
    
})




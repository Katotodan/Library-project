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
    headerPara.innerHTML = ''
    setTimeout(() => {
        headerPara.innerHTML = paragraphWord[index]
        document.querySelector('#word').innerHTML = paragraphWord[index]
    }, 500);
}, 4000);

// Script for menu responsiveness
const menu = document.querySelector('.menu-btn')
const deletebtn = document.querySelector('.delete-btn')




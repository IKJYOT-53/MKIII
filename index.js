const toggle = document.getElementsByClassName('toggle-button')
const uwu = document.getElementsByTagName('ul')
const card=document.getElementsByClassName('card')
console.log(card)
toggle[0].addEventListener('click',() =>{
uwu[0].classList.toggle('active')
})

card[0].addEventListener('click',()=>{
    window.open("https://ikjyot-53.github.io/anime-quotes-react/", '_blank').focus();
})
card[1].addEventListener('click',()=>{
    window.open("https://devpost.com/software/eazytoaccess", '_blank').focus();
})
card[2].addEventListener('click',()=>{
    window.open("https://ikjyot-53.github.io/ResumeWebsite/", '_blank').focus();
})
// Your code goes here
const mainNavigation = document.querySelectorAll('.main-navigation')
const container = document.querySelectorAll('.container home')
const contentSection = document.querySelectorAll('.content-section')
const mimgs = document.querySelectorAll('img')
const texContent = document.querySelectorAll('.tex-content')
const contentDestination = document.querySelectorAll('.content-destination')
const contentPick = document.querySelectorAll('.contentPick')

Array.from(document.links).forEach(function (link){
    link.addEventListener('click', function(event){
        event.preventDefault();
        console.log(`not target by default "${event.target.texContent}" link`)
    })
})


mainNavigation.addEventListener('click', function (event) => {
   
})

// Your code goes here
const headerNavigation = document.querySelector('header')
    headerNavigation.addEventListener('click' , function (event) {
        alert('Welcome to Fun Bus')
        headerNavigation.style.backgroundColor = 'lightblue';
        headerNavigation.addEventListener('focus', (event) => {
        event.target.style.background = 'blue';
        });  
        setTimeout(function() {
            event.target.style.color = '';
        }, 1000)

    }, false)

const mouseOver = document.querySelectorAll('.nav-link')
    mouseOver.forEach(e => {
        e.addEventListener('mouseenter', () => {
        event.target.style.color = 'pink';
    })
    })

const intro = document.querySelector('.intro')
    intro.addEventListener('dblclick', function (event) {
    intro.classList.toggle('intro');
    intro.style.border = '1em';
    console.log('mouseover img')
})

const imgContent = document.querySelector('.img-content')
    imgContent.addEventListener('dblclick', function (event) {
    imgContent.classList.toggle('img-content');
})

const haveFun = document.querySelector('.rounded')
    haveFun.addEventListener('dblclick', function (event) {
    haveFun.classList.toggle('rounded');
})

const button = document.querySelector('.footer')
button.addEventListener('mouseover', function (event) {
    event.target.style.color = 'orange';
    setTimeout(function() {
        event.target.style.color = '';
    }, 1000)
}, false)

// const footer = document.getElementsByTagName('footer')
// footer.addEventListener('mouseenter', function (event) {
//     event.target.style.backgroundColor = 'lightblue';
//     setTimeout(function() {
//         event.target.style.color = '';
//     }, 1000)
// }, false)
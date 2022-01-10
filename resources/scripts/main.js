const nav = document.getElementById('nav'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click',() =>{
    if (!nav.classList.contains('show-menu')) {
        nav.classList.add('show-menu')
    }
})

closeMenu.addEventListener('click', () =>{
    nav.classList.remove('show-menu')
})

const hideAside = document.getElementById('back-aside'),
    aside = document.getElementById('main-aside')

hideAside.addEventListener('click', () =>{
    aside.classList.add('hide-aside')
})
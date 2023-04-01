let menu = document.querySelector('.menu__icon')
let sidebar = document.querySelector('.nav-item')

menu.addEventListener('click',showMenu)

function showMenu(){
    if(menu.innerHTML=='menu'){
        sidebar.style.left = "0"
        menu.innerHTML = 'close'
    }else{
        sidebar.style.left = "-230px"
        menu.innerHTML = 'menu'
    }
}
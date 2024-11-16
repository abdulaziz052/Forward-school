let res_menu = document.querySelector('#menu')
let hamburger = document.querySelector('#hamburger')
let x_menu = document.querySelector('#x-menu')

hamburger.addEventListener('click' , function(){
    res_menu.classList.remove('right-full')
    res_menu.classList.add('right-0')
})

x_menu.addEventListener('click' ,  function(){
    res_menu.classList.add('right-full')
    res_menu.classList.remove('right-0')

})

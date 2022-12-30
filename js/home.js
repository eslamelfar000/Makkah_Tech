let list = document.querySelectorAll('.head-ul li');

list.forEach(i => {
    i.addEventListener('click', () => {
        removeClass()
        i.classList.add('active')
    })
})


const removeClass = () => {
    list.forEach(i => {
        i.classList.remove('active')
    })
}



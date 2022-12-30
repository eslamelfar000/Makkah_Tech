let nav = document.querySelector('#nav')
let links = document.querySelectorAll('.link');
let sideIcon = document.querySelector('#side-box')

document.addEventListener('scroll', () => {
    if (window.scrollY > nav.clientHeight) {
        nav.classList.add('nav-change')
        sideIcon.classList.add('change-color')

        links.forEach(i => {
            i.classList.add('link-color')
        })
    }
    else {
        nav.classList.remove('nav-change')
        sideIcon.classList.remove('change-color')
        links.forEach(i => {
            i.classList.remove('link-color')
        })
    }
})


// open sidebar
let side = document.querySelector('#side')
let overlay = document.querySelector('#overlay')
const openSide = () => {
    side.classList.add('open-side')
    overlay.classList.add('show')
    document.body.style.overflowY = "hidden";
    // document.body.style.marginRight = "7px";
}

const closeSide = () => {
    side.classList.remove('open-side')
    overlay.classList.remove('show')
    document.body.style.overflowY = "auto";
    // document.body.style.marginRight = "0px";
}



document.addEventListener('click', (e) => {
    if (e.target.id === "overlay") {
        side.classList.remove('open-side')
        overlay.classList.remove('show')
        document.body.style.overflowY = "auto";
        // document.body.style.marginRight = "0px";
    }
})


// open slide down in sidenav
let btn = document.querySelector('#btn-click');
let slide = document.querySelector('.slide-body');

const openSlide = () => {
    btn.classList.toggle('active');
    slide.classList.toggle('active-body')
}

let btnScroll = document.querySelector('.btn-scroll');
let btnMobile = document.querySelector('.btn-mobile');
let navMobile = document.querySelector('.nav');
let lines = document.querySelectorAll('.line');
let header = document.querySelector('.header');
let btnsHeader = document.querySelectorAll('.text-btn-header');

window.addEventListener("scroll", () => {

    if(scrollY > 450){
        btnScroll.classList.add('hidden');
    } else {
        btnScroll.classList.remove('hidden');
    }

    if(scrollY > 50){
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    if(scrollY > 450){
        navMobile.classList.remove('hidden');
        lines.forEach(line => {
            line.classList.remove('hidden');
        });
    }
})

btnScroll.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

btnMobile.addEventListener("click", () => {
    btnMobile.classList.toggle('hidden');
    navMobile.classList.toggle('hidden');
    lines.forEach(line => {
        line.classList.toggle('hidden');
    });
})



btnsHeader.forEach(btns => {
    btns.addEventListener("click", () => {
        navMobile.classList.remove('hidden');
            lines.forEach(line => {
                line.classList.remove('hidden');
            });
    })
}
)

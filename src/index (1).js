
    // barre de navigation responsive
    const hamburger = document.querySelector(".hamburger")
    const menu = document.querySelector(".menu ul")
    const cross = document.querySelector(".cross")

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('mobile-menu')
    })

    cross.addEventListener('click', () => {
        menu.classList.remove('mobile-menu')

    })
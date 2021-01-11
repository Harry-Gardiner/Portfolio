
// Active nav on scroll (does not work for contact)
window.addEventListener('scroll', event => {
    let navLinks = document.querySelectorAll('nav ul li a.link');
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        let nextSectionHeight = section.nextElementSibling.clientHeight;
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + (section.offsetHeight + nextSectionHeight) > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Active contact on reaching bottom of webpage via scroll
window.onscroll = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        let footer = document.querySelectorAll('nav ul li a.link')[3];
        let project = document.querySelectorAll('nav ul li a.link')[2];
        footer.classList.add('active');
        project.classList.remove('active')
    }
};
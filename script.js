document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menubar = document.querySelector('.menubar');
    const nav = document.querySelector('nav');

    // Toggling menu and hamburger icon transformation
    hamburger.addEventListener('click', function () {
        menubar.classList.toggle('active');
        hamburger.classList.toggle('active'); // Toggle the cross transformation
    });

    // Reset the hamburger menu when resizing the window beyond 1100px
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1100) {
            menubar.classList.remove('active');
            hamburger.classList.remove('active'); // Reset hamburger icon
        }
    });

    // Add sticky class to navbar on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});

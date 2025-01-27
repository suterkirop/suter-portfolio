document.addEventListener('DOMContentLoaded', () => {
    // Typed.js for dynamic name typing
    new Typed('#typed-output', {
        strings: ['Brian Suter', 'an IT Specialist', 'a Problem Solver'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');

            // Get the target element by href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
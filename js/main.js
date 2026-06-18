document.addEventListener('DOMContentLoaded', () => {
    console.log('ZZZ.INFO Loaded');
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animation to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.padding = '15px 50px';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.padding = '20px 50px';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target ID (e.g., "receita1")
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80; // Adjust for header
                try {
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                } catch (e) {
                    // Fallback for older browsers
                    window.scrollTo(0, offsetTop);
                }
            } else {
                console.warn(`Target element with ID "${targetId}" not found.`);
            }
        });
    });
});
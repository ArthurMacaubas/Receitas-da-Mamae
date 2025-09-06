document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
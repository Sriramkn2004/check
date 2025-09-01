document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    console.log('Application started');

    // Add event listeners
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('href').substring(1);
            console.log(`Navigating to ${section}`);
        });
    });
});
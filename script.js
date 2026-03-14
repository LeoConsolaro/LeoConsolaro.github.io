document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Fermer le menu mobile automatiquement après un clic sur un lien
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});
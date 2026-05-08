document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
        const overlay = document.getElementById('menu-overlay');

        function toggleMenu() {
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        }

        if (hamburger && menu) {
            hamburger.addEventListener('click', toggleMenu);
        }

        if (overlay) {
            overlay.addEventListener('click', toggleMenu);
        }
    });
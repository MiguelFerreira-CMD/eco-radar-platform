// Auth utility for protected pages
(function() {
    const token = localStorage.getItem("token");
    
    // List of protected pages
    const isProtectedPage = window.location.pathname.includes("calculadora.html") || 
                            window.location.pathname === "/calculadora";

    if (isProtectedPage && !token) {
        // We wait for DOMContentLoaded to ensure modal functions are available from navbar.js
        document.addEventListener("DOMContentLoaded", function() {
            if (window.showAuthModal) {
                window.showAuthModal();
            }
            
            // Optionally, we can blur the main content or add an overlay
            const main = document.querySelector('main');
            if (main) {
                main.style.filter = 'blur(10px)';
                main.style.pointerEvents = 'none';
                main.style.userSelect = 'none';
            }
        });
    }
})();
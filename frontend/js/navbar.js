document.addEventListener("DOMContentLoaded", function() {
    const token = localStorage.getItem("token");
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('menu-overlay');

    // --- NAVBAR AUTH STATE ---
    const nav = document.querySelector('.nav');
    if (nav && menu) {
        // Desktop Container
        let authContainer = document.querySelector('.auth-buttons');
        if (!authContainer) {
            authContainer = document.createElement('div');
            authContainer.className = 'auth-buttons';
            nav.appendChild(authContainer);
        }

        // Mobile Container inside Menu
        let mobileAuth = document.querySelector('.mobile-auth');
        if (!mobileAuth) {
            mobileAuth = document.createElement('li');
            mobileAuth.className = 'mobile-auth';
            menu.appendChild(mobileAuth);
        }
        
        const authHtml = token 
            ? `<a href="#" id="logout-btn" class="btn-logout">Sair</a>`
            : `
                <a href="/login" class="btn-login">Entrar</a>
                <a href="/registro" class="btn-register">Cadastrar</a>
            `;
        
        authContainer.innerHTML = authHtml;
        mobileAuth.innerHTML = authHtml;
    }

    // --- PROTECTED ROUTES MODAL LOGIC ---
    // We target both menu links and card/CTA clicks
    const protectedPages = ['calculadora.html', '/calculadora'];
    
    document.querySelectorAll('a, .card, #cta-button').forEach(element => {
        element.addEventListener('click', function(e) {
            let target = '';
            if (this.tagName === 'A') {
                target = this.getAttribute('href') || '';
            } else if (this.classList.contains('card')) {
                // Get the onclick attribute or assume based on content
                if (this.innerHTML.includes('Calculadora')) target = 'calculadora.html';
                if (this.innerHTML.includes('Denúncia')) target = 'denuncia.html';
            } else if (this.id === 'cta-button') {
                target = 'calculadora.html';
            }

            if (protectedPages.some(p => target.includes(p)) && !token) {
                e.preventDefault();
                e.stopPropagation();
                showAuthModal();
            }
        }, true); // Use capture to intercept before other listeners
    });

    // --- MOBILE MENU ---
    function toggleMenu() {
        console.log("Toggle menu clicked");
        if (menu) menu.classList.toggle('active');
        if (hamburger) hamburger.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    // --- LOGOUT LOGIC ---
    document.addEventListener('click', (e) => {
        if (e.target.id === 'logout-btn') {
            e.preventDefault();
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/";
        }
    });

    // --- MODAL FUNCTIONS ---
    function injectModal() {
        if (document.getElementById('auth-modal')) return;
        const modalHtml = `
            <div id="auth-modal" class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close" id="modal-close">&times;</button>
                    <div class="modal-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8DAA3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                    <h2>Acesso Restrito</h2>
                    <p>Você precisa estar logado para acessar esta funcionalidade.</p>
                    <div class="modal-actions">
                        <a href="/login" class="modal-btn-login">Entrar</a>
                        <a href="/registro" class="modal-btn-register">Cadastrar</a>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        document.getElementById('modal-close').onclick = hideAuthModal;
        document.getElementById('auth-modal').onclick = (e) => { if(e.target.id === 'auth-modal') hideAuthModal(); };
    }

    function showAuthModal() {
        injectModal();
        const modal = document.getElementById('auth-modal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideAuthModal() {
        const modal = document.getElementById('auth-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    window.showAuthModal = showAuthModal;
});
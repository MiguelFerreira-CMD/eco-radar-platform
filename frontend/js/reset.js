document.getElementById('resetForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');
    const btnSubmit = document.getElementById('btnSubmit');
    const loader = document.getElementById('loader');
    const btnText = btnSubmit.querySelector('.btn-text');

    // Validação de senha
    if (password !== confirmPassword) {
        messageDiv.textContent = 'As senhas não coincidem.';
        messageDiv.className = 'feedback-message error';
        return;
    }

    if (password.length < 6) {
        messageDiv.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        messageDiv.className = 'feedback-message error';
        return;
    }

    // Pega o token da URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!token) {
        messageDiv.textContent = 'Token de recuperação ausente ou inválido.';
        messageDiv.className = 'feedback-message error';
        return;
    }

    // UI Feedback
    messageDiv.className = 'feedback-message';
    btnSubmit.disabled = true;
    loader.style.display = 'block';
    btnText.textContent = 'Redefinindo...';

    try {
        const response = await fetch('/api/password/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, password })
        });

        const data = await response.json();

        if (response.ok) {
            messageDiv.textContent = 'Senha redefinida com sucesso! Redirecionando...';
            messageDiv.classList.add('success');
            
            setTimeout(() => {
                window.location.href = '/login';
            }, 3000);
        } else {
            messageDiv.textContent = data.message || 'Erro ao redefinir senha.';
            messageDiv.classList.add('error');
            btnSubmit.disabled = false;
        }
    } catch (err) {
        console.error('Erro:', err);
        messageDiv.textContent = 'Erro na conexão com o servidor.';
        messageDiv.classList.add('error');
        btnSubmit.disabled = false;
    } finally {
        loader.style.display = 'none';
        btnText.textContent = 'Redefinir Senha';
    }
});

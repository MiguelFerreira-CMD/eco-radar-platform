document.getElementById('forgotForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const btnSubmit = document.getElementById('btnSubmit');
    const loader = document.getElementById('loader');
    const btnText = btnSubmit.querySelector('.btn-text');

    // UI Feedback (apenas visual de carregamento)
    btnSubmit.disabled = true;
    loader.style.display = 'block';
    btnText.textContent = 'Gerando...';

    try {
        const response = await fetch('/api/password/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok && data.token) {
            // Redireciona para a página de reset passando e-mail e token na URL
            window.location.href = `/reset-senha?email=${encodeURIComponent(email)}&token=${data.token}`;
        }
    } catch (err) {
        console.error(err);
    } finally {
        // Em caso de erro ou finalização sem redirecionar, voltamos o botão ao estado original
        btnSubmit.disabled = false;
        loader.style.display = 'none';
        btnText.textContent = 'Gerar Link';
    }
});
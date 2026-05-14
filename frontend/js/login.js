const form = document.getElementById("loginForm");
const rememberCheckbox = document.getElementById("lembrar");
const emailInput = document.getElementById("email");

// Ao carregar a página, verifica se há um e-mail salvo
window.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("rememberedEmail");

    if (savedEmail) {
        emailInput.value = savedEmail;

        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }
    }
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const password = document.getElementById("senha").value;

    const submitBtn = form.querySelector('button[type="submit"]');

    console.log("Tentando login para:", email);

    try {
        const originalText = submitBtn.innerText;

        submitBtn.innerText = "Entrando...";
        submitBtn.disabled = true;

        // Acorda o servidor Render antes do login
        await fetch("/api/health");

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Erro ao fazer login.");

            submitBtn.innerText = originalText;
            submitBtn.disabled = false;

            return;
        }

        // Lógica do "Lembrar-me"
        if (rememberCheckbox && rememberCheckbox.checked) {
            localStorage.setItem("rememberedEmail", email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }

        // Salva autenticação
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        submitBtn.innerText = "Sucesso!";

        // Redireciona
        window.location.href = "/";

    } catch (err) {
        console.error("Erro no login:", err);

        alert("Servidor iniciando ou indisponível. Aguarde alguns segundos e tente novamente.");

        submitBtn.innerText = "Entrar";
        submitBtn.disabled = false;
    }
});
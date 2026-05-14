const form = document.getElementById("loginForm");
const rememberCheckbox = document.getElementById("lembrar");
const emailInput = document.getElementById("email");

// Ao carregar a página, verifica se há um e-mail salvo
window.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
        emailInput.value = savedEmail;
        if (rememberCheckbox) rememberCheckbox.checked = true;
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
        submitBtn.innerText = "Carregando...";
        submitBtn.disabled = true;

        const response = await fetch("http://192.168.0.6:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Erro no login");
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

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/";

    } catch (err) {
        console.error("Erro no login:", err);
        alert("Erro ao conectar com o servidor.");
        submitBtn.innerText = "Entrar";
        submitBtn.disabled = false;
    }
});
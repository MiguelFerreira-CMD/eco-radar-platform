const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("senha").value;
    const confirmPassword = document.getElementById("confirmarSenha").value;
    const submitBtn = form.querySelector('button[type="submit"]');

    if (password !== confirmPassword) {
        alert("As senhas não coincidem");
        return;
    }

    if (/\s/.test(password)) {
        alert("A senha não pode conter espaços.");
        return;
    }

    if (password.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert("A senha deve conter pelo menos 1 letra maiúscula.");
        return;
    }


    if (!/[0-9]/.test(password)) {
        alert("A senha deve conter pelo menos 1 número.");
        return;
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password)) {
        alert("A senha deve conter pelo menos 1 caractere especial (ex: !@#$%&*).");
        return;
    }

    const sequenciasF = ["123456", "abcdef", "qwerty", "654321", "fedcba"];
    const senhaLower = password.toLowerCase();
    for (const seq of sequenciasF) {
        if (senhaLower.includes(seq)) {
            alert("A senha contém uma sequência fraca (ex: 123456, abcdef, qwerty). Escolha uma senha mais forte.");
            return;
        }
    }

    const senhasComuns = [
        "admin123", "senha123", "miguel123", "password", "12345678",
        "admin1234", "senha1234", "qwerty123", "abc12345"
    ];
    if (senhasComuns.includes(senhaLower)) {
        alert("Essa senha é muito comum. Escolha uma senha mais forte.");
        return;
    }



    console.log("Tentando criar conta para:", email);

    try {
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Criando conta...";
        submitBtn.disabled = true;

        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Erro no registro");
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            return;
        }

        window.location.href = "/login";

    } catch (err) {
        console.error("Erro no registro:", err);
        alert("Erro ao conectar com o servidor.");
        submitBtn.innerText = "Criar conta";
        submitBtn.disabled = false;
    }
});
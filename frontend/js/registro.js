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

        window.location.href = "/";

    } catch (err) {
        console.error("Erro no registro:", err);
        alert("Erro ao conectar com o servidor.");
        submitBtn.innerText = "Criar conta";
        submitBtn.disabled = false;
    }
});
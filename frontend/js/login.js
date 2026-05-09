const form = document.getElementById("loginForm");



form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("senha").value;
    const submitBtn = form.querySelector('button[type="submit"]');

    console.log("Tentando login para:", email);

    try {
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Carregando...";
        submitBtn.disabled = true;

        const response = await fetch("http://localhost:5000/api/auth/login", {
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

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/pages/index.html";

    } catch (err) {
        console.error("Erro no login:", err);
        alert("Erro ao conectar com o servidor.");
        submitBtn.innerText = "Entrar";
        submitBtn.disabled = false;
    }
});
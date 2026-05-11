document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
});
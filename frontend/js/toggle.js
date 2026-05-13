function setupPasswordToggle(toggleId, inputId) {
    const toggleElement = document.getElementById(toggleId);
    const inputElement = document.getElementById(inputId);

    if (toggleElement && inputElement) {
        toggleElement.addEventListener('click', () => {
            if (inputElement.type === 'password') {
                inputElement.type = 'text';
                toggleElement.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                inputElement.type = 'password';
                toggleElement.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    }
}

setupPasswordToggle('toggleSenha', 'senha');
setupPasswordToggle('toggleConfirmar', 'confirmarSenha');
setupPasswordToggle('togglePassword', 'password');
setupPasswordToggle('toggleConfirmPassword', 'confirmPassword');

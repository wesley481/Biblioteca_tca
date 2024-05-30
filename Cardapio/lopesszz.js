// script.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    if (name === "" || email === "" || password === "") {
        message.textContent = "Por favor, preencha todos os campos.";
    } else {
        message.textContent = "Cadastro realizado com sucesso!";
        message.style.color = "green";

        // Aqui você pode adicionar a lógica para enviar os dados para o servidor

        // Limpar o formulário após o envio
        document.getElementById('registerForm').reset();
    }
});

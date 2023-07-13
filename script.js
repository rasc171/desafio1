function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username !== '' && password !== '') {
        // Redirecionar para a página de produtos
        window.location.href = 'lista_produtos.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function resetPassword() {
    var email = document.getElementById('email').value;

    if (email !== '') {
        // Exibir mensagem de pop-up
        alert('O link para redefinição foi enviado para o endereço informado.');

        // Redirecionar para a página de login
        window.location.href = 'index.html';
    } else {
        alert('Por favor, preencha o campo de e-mail.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const FORM = document.getElementById('projeto');
    alert("Página carregada com sucesso!");

    FORM.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const idade = document.getElementById('idade').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const linguagens = document.getElementById('Linguagens').value;

        if (!nome || !telefone || !idade || !email || !senha || !linguagens) {
            alert("Preencha todos os campos!");
            return;
        }
        if(nome.length > 10){
            alert("Nome deve ter no máximo 10 caracteres");
            return;
        }
        if(telefone.length !== 11){
            alert("Telefone deve ter 11 dígitos");
            return;
        }
        if(Number(idade) < 0){
            alert("Idade não pode ser menor que 0");
            return;
        }
        if(!email.includes('@') || !email.includes('.com')) {
            alert("Email inválido");
            return;
        }
        if(senha.length < 6) {
            alert("Senha deve ter no mínimo 6 caracteres");
            return;
        }
    });
});


document.addEventListener('DOMContentLoaded', function(){
    const FORM1 = document.getElementById('cadastro');
    alert("Página carregada com sucesso!");
    if (document.title.includes('cadastro') || document.body.innerText.includes('cadastre-se')) {
        FORM1.addEventListener('submit', function(event) {
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
            // Se linguagens for um select múltiplo, verifique se há seleção
            if (!linguagens || linguagens.length < 1){
                alert("Selecione ao menos um curso");
                return;
            }
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('senha', senha);
        });
    }
    const FORM2 = document.getElementById('login');
    if (document.title.includes('login') || document.body.innerText.includes('faça login')) {
        FORM2.addEventListener('submit', function(event) {
            event.preventDefault();
            const emaildigitado = document.getElementById('email').value;
            const senhadigitado = document.getElementById('senha').value;

            if (!emaildigitado || !senhadigitado) {
                alert("Preencha todos os campos!");
                return;
            }

            const storedEmail = localStorage.getItem('email');
            const storedSenha = localStorage.getItem('senha');

            if (emaildigitado === storedEmail && senhadigitado === storedSenha) {
                alert("Login bem-sucedido!");
            } else {
                alert("Email ou senha incorretos!");
            }
        });
    }
});
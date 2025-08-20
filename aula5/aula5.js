document.addEventListener('DOMContentLoaded', function() {
    const FORM1 = document.getElementById('cadastro');
    alert("Página carregada com sucesso!");
    if (documentos.title.includes('cadastro') || documento.body.innertext.includes('cadastre-se')){
        FORM1.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const idade = document.getElementById('idade').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const linguagens = document.getElementById('Linguagens').value;

            console.log("passo 1")
            if (!nome || !telefone || !idade || !email || !senha || !linguagens) {
                alert("Preencha todos os campos!");
                return;
            }
            console.log("passo 2")
            if(nome.length > 10){
                alert("Nome deve ter no máximo 10 caracteres");
                return;
            }
            console.log("passo 3")
            if(telefone.length !== 11){
                alert("Telefone deve ter 11 dígitos");
                return;
            }
            console.log("passo 4")
            if(Number.idade < 0){
                alert("Idade não pode ser menor que 0");
                return;
            }
            console.log("passo 5")
            if(!email.includes('@') || !email.includes('.com')) {
                alert("Email inválido");
                return;
            }
            console.log("passo 6")
            if(senha.length < 6) {
                alert("Senha deve ter no mínimo 6 caracteres");
                return;
            }
            console.log("passo 7")
            if(linguagens.value > 1){
                alert("Selecione ao menos um curso");
                return;
                
            }
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('senha', senha);

            //alert("Formulário enviado com sucesso!");
            //FORM.submit();
            });
    };
    const FORM2 = document.getElementById('login');
    if (documento.title.includes('login') || documento.body.innertext.includes('faça login')) {
        FORM2.addEventListener('submit',function(event) {
            event.preventDefault();
            const emaildigitado = document.getElementById('email').value;
            const senhadigitado = document.getElementById('senha').value;
            const emailsalvo = localStorage.getItem('email');
            const senhasalvo = localStorage.getItem('senha');
            

            if (!email || !senha) {
                alert("Preencha todos os campos!");
                return;
            }

            const storedEmail = localStorage.getItem('email');
            const storedSenha = localStorage.getItem('senha');

            if (email === storedEmail && senha === storedSenha) {
                alert("Login bem-sucedido!");
                // Redirecionar ou realizar outras ações
            } else {
                alert("Email ou senha incorretos!");
            }
        }



});
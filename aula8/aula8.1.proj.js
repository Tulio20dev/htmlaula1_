let inscritos = [];
    function adicionar() {
        const nome = document.getElementById("nome").value;
        if (nome === "") {
        alert("Digite um nome válido!");
        return;
        }
        inscritos.push(nome);
        document.getElementById("nome").value = "";
        alert("Cadastrado com sucesso");
    }

function consultar(){
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    if (inscritos.length === 0) {
        lista.innerHTML = "Nenhum inscrito.";
        return;
    }
    for (let i = 0; i < inscritos.length; i++){
    lista.innerHTML += `${inscritos[i]}<br>`;    }
}

function remover() {
    const nome = document.getElementById("nome").value;
    const i = inscritos.indexOf (nome);
        if(i != -1){
            inscritos.splice(i, 1);
            alert("Removido com sucesso");
        }else{
            alert("Nome não encontrado para remoção!");
            return;
            }
}

function adicionar() {
    const nome = document.getElementById("nome").value;
        if (nome === "") {
            alert("Digite um nome válido!");
            return;
        }else if (inscritos.indexOf(nome) != -1){
            alert("Nome já foi cadastrado!");
            return;
        }else{
            inscritos.push(nome);
            document.getElementById("nome").value =
            alert("Cadastrado com sucesso");
        }
}
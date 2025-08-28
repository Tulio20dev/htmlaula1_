let cadastros = [];

const add =  document.getElementById('adicionar');
const remove = document.getElementById('remover');

add.addEventListener('click', function(event) {
    const nome = document.getElementById('nome').value;
    if (nome === "") {
        alert("Preencha o campo nome!");
        return;
    }else{
        cadastros.push(nome);
    }
    atualizarlista();
});
remove.addEventListener('click',function(event) {
    const nome = document.getElementById('nome').value;
    const index = cadastros.indexOf(nome); 
    if(index != 1){
        cadastros.splice(0,1);
        atualizarlista();
    }else{
        alert('nome nao encontrado para remoção')
        return;
    }
});

function atualizarlista() {
    const kusta = document.getElementById('lista');
    let html = '';
    if (cadastros.lenght != 0){
        for (const nome of cadastros){
            html += `${nome} <br>`;
       }
    }
    lista.innerHTML = html;
}
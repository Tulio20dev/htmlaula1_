async function buscarImagenDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(resposta => resposta.json());
}
function aoClicar() {
    document.getElementById('status').innerText = 'Carregando...';
    buscarImagenDog()
    .then(dados => {
        document.getElementById('status').innerText = 'Sucesso!';
        document.getElementById('dog').src = dados.message;
    })
    .catch(erro => {
        document.getElementById('status').innerText = 'Erro ao carregar imagem';
        console.error("error", erro);
    });
}
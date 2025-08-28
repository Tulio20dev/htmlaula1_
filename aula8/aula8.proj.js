window.addEventListener("DOMContentLoaded", () =>{
    const lista = [];

    // 
    document.getElementById("adicionar").addEventListener("click",()=>{
        const nome = document.getElementById("nome").value
            if(lista.indexOf(nome) == -1){
                lista.push(nome)
                console.log("ok")
            }else{
                alert('È preciso que adicione um nome')
                return;
            }
    })
    document.getElementById("consultar").addEventListener("click",()=>{
        const listahtml = document.getElementById("lista")

        for(let nome of lista)
    })


})
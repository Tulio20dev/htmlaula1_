let contador = 0;
let intervalo = null;
function iniciar() {
    if (intervalo !== null) {
        return;
    }
    intervalo = setInterval(function() {
        contador++;
        document.getElementById("display").innerText = contador + " segundos";
    }, 1000);
}
function parar() {
    clearInterval(intervalo);
    intervalo = null;
    contador = 0;
}

function Carregar () {
    alert("pagina carregada com sucesso");
}
function Clicar () {
    alert("Botão clicado!");
}
function Focar (campo) {
    console.log("campo em foco: " + campo.id);
}
function PerderFoco (campo) {
    console.log("campo perdeu o foco" + campo.id);
}
function Mudar (campo) {
    alert("valor alterado: " + campo.value);
}
function PressioneTecla (event) {
    console.log("Tecla pressionada: " + event.key);
}
function PassarMouse () {
    document.getElementById("area").innertext = 
    "o mouse está sobre a area";
}
function SairMouse () {
    document.getElementById("area").innertext = 
    "o mouse saiu de cima";
}

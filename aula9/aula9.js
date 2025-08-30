console.log("oi")
async function buscaPokemon() {
    const nome = document.getElementById("pokemon").value;
    const info = document.getElementById("info");
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome);

    try {
        let data = await response.json();
        info.innerHTML = `
        ${data.name.ToUpperCase()}
        Altura: ${data.height / 10} m
        peso: ${data.weight / 10} kg`;
    } catch (error) {
        info.innerHTML = "Pokemon não encontrado";
    } 
}
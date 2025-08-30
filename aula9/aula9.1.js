const username = document.getElementById("username").value;
const senha = document.getElementById("senha").value;
async function enviar() {
    const credentials = {username : username, senha: senha};
        fetch("fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(credentials)
    })
    try {
        let data = await response;json();
        alert('login com susesso');
    } catch (error) {
        alert('falha no login');
    }
}
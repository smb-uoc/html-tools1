export function fetchLetra(artista, cancion, letrasDiv) {
    const notFound = "No se pudo encontrar la letra para esa canción.";
    fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`)
        .then(response => {
            if (!response.ok) {
                console.error(notFound);
            }
            return response.json();
        })
        .then(data => {
            if (data.lyrics) {
                const lineBreakIndex = data.lyrics.indexOf("\n");
                letrasDiv.textContent = data.lyrics.substring(lineBreakIndex + 1);
            } else {
                letrasDiv.textContent = notFound;
            }
        })
        .catch(error => {
            let message = "Error al buscar las letras: " + error;
            console.error(message);
            letrasDiv.textContent = message;
        });
}

window.searchLyrics = function searchLyrics() {
    let artista = 'Red Hot Chili Peppers';
    let cancion = document.getElementById("songtitle").value;
    const letrasDiv = document.getElementById("letra");
    fetchLetra(artista, cancion, letrasDiv);
}

window.clean = function clean() {
    document.getElementById("songtitle").textContent = "";
    document.getElementById("letra").textContent = "";
}
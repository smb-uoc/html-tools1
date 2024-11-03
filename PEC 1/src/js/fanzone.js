import data from './comments.json';

export function addComments(data, hasEffect) {
    const comentariosDiv = document.getElementById("comentarios");

    data.forEach(comentario => {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");
        if(hasEffect) {
            comentarioDiv.classList.add("typing-animation");
        }
        const nombreParrafo = document.createElement("p");

        nombreParrafo.classList.add("nombre");
        nombreParrafo.textContent = comentario.nombre;
        comentarioDiv.appendChild(nombreParrafo);
        const comentarioParrafo = document.createElement("p");

        comentarioParrafo.classList.add("comentario-texto");
        comentarioParrafo.textContent = comentario.comentario;
        comentarioDiv.appendChild(comentarioParrafo);
        const horaParrafo = document.createElement("p");

        horaParrafo.classList.add("datetime");
        horaParrafo.textContent = new Date(comentario.datetime).toDateString();
        comentarioDiv.appendChild(horaParrafo);
        let primerElemento = comentariosDiv.firstChild;

        const comentarioLi = document.createElement("li");
        comentarioLi.appendChild(comentarioDiv);
        comentariosDiv.insertBefore(comentarioLi, primerElemento);
    });
}

window.enviarComentario = function enviarComentario() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.remove('loading-hidden');
    loadingContainer.classList.add('loading-visible');

    // Simulate a loading process
    setTimeout(function() {
        loadingContainer.classList.remove('loading-visible');
        loadingContainer.classList.add('loading-hidden');

        addComments([{
            nombre: document.getElementById("nombre").value,
            comentario: document.getElementById("comentario").value,
            datetime: new Date()
        }], true)

        document.getElementById("nombre").value = "";
        document.getElementById("comentario").value = "";
    }, 3000);
}

addComments(data, false);

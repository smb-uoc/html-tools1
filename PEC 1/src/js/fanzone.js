import data from './comments.json';

export function addComments(data) {
    const comentariosDiv = document.getElementById("comentarios");

    data.forEach(comentario => {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

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
        comentariosDiv.insertBefore(comentarioDiv, primerElemento);
    });
}

window.enviarComentario = function enviarComentario() {
    addComments([{
        nombre: document.getElementById("nombre").value,
        comentario: document.getElementById("comentario").value,
        datetime: new Date()
    }])

    document.getElementById("nombre").value = "";
    document.getElementById("comentario").value = "";
}

addComments(data);

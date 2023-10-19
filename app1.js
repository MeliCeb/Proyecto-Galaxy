window.addEventListener('load', obtenerDatos);

function obtenerDatos() {
    const Nasa_key = 'S3hLKeulKC3omXv3abi9veZZIO8XxvWUre6Rys9a';
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_key}`;

    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado));
}

function mostrarDatos({ explanation, media_type, title, url }) {
    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;
    const description = document.querySelector('#descripcion');
    description.innerHTML = explanation;
    const multimedia = document.querySelector('.parallax-image.parallax-image-01');

    if (media_type == 'video') {
        multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`;
    } else {
        multimedia.style.backgroundImage = `url(${url})`;
    }
}

window.addEventListener('load',obtenerDatos);

function obtenerDatos (){

    const Nasa_key = 'S3hLKeulKC3omXv3abi9veZZIO8XxvWUre6Rys9a'
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_key}`
    fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))
}

function mostrarDatos({date,explanation,media_type,title,url}){
    const titulo = document.querySelector('#titulo')
    titulo.innerHTML = title;    
    const fecha = document.querySelector('#fecha')
    fecha.innerHTML = date;    
    const description = document.querySelector('#descripcion')
    description.innerHTML = explanation;    
    const multimedia = document.querySelector('#c_multimedia')
if(media_type == 'video'){
    multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`
} else {
multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`
}   

}
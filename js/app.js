//Aplicando fetch a mi proyecto para cargar datos de manera asincronica
const URL =  "js/cartelera.json"  //simulo un backend
let cartelera = [] //Array vacío donde cargare la respuesta de FETCH
const seleccion = document.querySelector("select#pelicula")
  

const peticionFetch = async ()=> {
    const response = await fetch(URL)
    const data = await response.json()
          return data
}

const retornoContenidoPeliculas = (contenido)=> {
    const {pelicula, value} = contenido
    return `<option value="${value}">${pelicula}</option>`
}

const retornoError = ()=> {
    return `<div class="error">
                <p>Parece que hubo un error :(</p>
                <p>Vuelva a intentar en unos segundos...</p>
            </div>`
}

const cargarPeliculas = async ()=> {
    let contenidoHTML = ""
        try {
            cartelera = await peticionFetch()
            cartelera.forEach(contenido => {
                contenidoHTML += retornoContenidoPeliculas(contenido)
            })
            seleccion.innerHTML = contenidoHTML
        } catch (error) {
            seleccion.innerHTML = retornoError()
        } 
}
cargarPeliculas()    
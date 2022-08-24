//cargo las peliculas disponibles para seleccionar
const cargarPelis = (select, array) => { 
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.value}">${elemento.pelicula}</option>`
        });
    }}

 cargarPelis(pelicula, datosPeliculas);   
  
    


//actualiza el total de butacas y el importe a pagar
function actualizaSeleccion(){
    const butacasSeleccionadas = document.querySelectorAll('.fila .butaca.seleccionada')
    const butacasSeleccionadasContador = butacasSeleccionadas.length;
    contar.innerText = butacasSeleccionadasContador;
    total.innerText = butacasSeleccionadasContador * precioTicket;
}

//evento que se produce al cambiar la pelicula seleccionada
peliculaSeleccionada.addEventListener('change', e => {
    precioTicket = parseInt(e.target.value);
    actualizaSeleccion()
})


//selecciona las butacas disponibles y la cambia de color
// e.target se refiere elemento clickeado
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('butaca') && !e.target.classList.contains('ocupada')){
    e.target.classList.toggle('seleccionada');  //uso el metodo toggle para agregar o remmover la clase 'seleccionada'
    }
    actualizaSeleccion();
})
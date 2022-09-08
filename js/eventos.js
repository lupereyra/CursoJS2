//cargo las peliculas disponibles para seleccionar   
//uso del operador logico AND  
//const cargarPelis = (select, array) => { 
//     (array.length > 0) && array.forEach(elemento => {
//            select.innerHTML += `<option value="${elemento.value}">${elemento.pelicula}</option>`
//        });
//    }

// cargarPelis(pelicula, datosPeliculas);    

//actualiza el total de butacas y el importe a pagar
let butacasSeleccionadasContador;
function actualizaSeleccion(){
    const butacasSeleccionadas = document.querySelectorAll('.fila .butaca.seleccionada')
    butacasSeleccionadasContador = butacasSeleccionadas.length;
    contar.innerText = butacasSeleccionadasContador;
    total.innerText = butacasSeleccionadasContador * precioTicket;
}


//evento que se produce al cambiar la pelicula seleccionada
peliculaSeleccionada.addEventListener('change', e => {
    precioTicket = parseInt(e.target.value);
    actualizaSeleccion()
})

//selecciona las butacas disponibles y la cambia de color
// e.target se refiere al elemento clickeado
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('butaca') && !e.target.classList.contains('ocupada')){
    e.target.classList.toggle('seleccionada');  //uso el metodo toggle para agregar o remmover la clase 'seleccionada'
    }
    actualizaSeleccion();
})


const datosCompletos = ()=> {          
    if (pelicula.value !== "..." && butacasSeleccionadasContador > 0) {
        return true
       } else
       return false
}

//local storage  (cuando el usuario hace click en continuar se guarda la info)
const guardarData = ()=> { 
    const info = {
         fecha: new Date().toLocaleString(),
         pelicula: pelicula[pelicula.selectedIndex].text,
         precio: total.innerText
    }
    localStorage.setItem("UltimaSeleccion", JSON.stringify(info))
}
//LIBRERIAS: Usé la libreria Sweet Alert ya que necesitaba que aparezcan varios alert durante mi proyecto
const modalVentana = () => {
    Swal.fire({
    className:"ventana",     
    title: 'Atencion!',
    text: ` Su seleccion: ${pelicula[pelicula.selectedIndex].text} `,
    footer: `Total: $ ${total.innerText} (incluye IVA)`,
    imageUrl: 'https://unsplash.com/es/fotos/Lq6rcifGjOU',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'imagen cine',
    confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> COMPRAR',
    showCloseButton: true,
}) 
}

const avisoAlerta = () => {
    Swal.fire({
        text: "Complete todos los datos solicitados!",
        icon: "warning",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
    })
}


const continuar = () => {
if(datosCompletos()){
    modalVentana(),
    guardarData()
}else{
    avisoAlerta() 
}
}
btnContinuar.addEventListener("click", continuar)



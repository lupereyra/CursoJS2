//conecto con el DOM
const contenedor= document.querySelector('.contenedorDos');
const butacas= document.querySelectorAll('.fila .butaca:not(.ocupada)'); //selecciono solo las butacas que no estan ocupadas para operar con ellas
const contar= document.getElementById('contar');
const total=  document.getElementById('total');
const peliculaSeleccionada= document.getElementById('pelicula');
const btnContinuar = document.querySelector('button')

let precioTicket = parseInt(peliculaSeleccionada.value);


//array de objetos con las peliculas disponibles en cartelera

//const datosPeliculas = [];  //declaro un array vacio

//class DatosPelicula {          //genero una clase que creara los objetos que iran a mi array
//    constructor(pelicula, value){
//        this.pelicula = pelicula
//        this.value = value
//    }
//}

//function generadorDatosPeliculas (){
//    datosPeliculas.push(new DatosPelicula ('Dragon Ball Super - 2D CAST ($700)', 700))
//    datosPeliculas.push(new DatosPelicula ('30 noches con mi ex - 2D CAST ($600)', 600))
//    datosPeliculas.push(new DatosPelicula ('Bestia - 2D CAST ($650)', 650))
//    datosPeliculas.push(new DatosPelicula ('El perro samurai - 2D CAST ($700)', 700))
//    datosPeliculas.push(new DatosPelicula ('Tren bala - 2D SUB ($730)', 730))
//    datosPeliculas.push(new DatosPelicula ('La habitacion del horror -2D SUB ($750)', 750))
//    datosPeliculas.push(new DatosPelicula ('Thor: Amor y trueno -2D CAST ($600)', 600))
//    datosPeliculas.push(new DatosPelicula ('Minions: Nace un villano -2D CAST ($600)', 600))
//    datosPeliculas.push(new DatosPelicula ('El telefono negro -2D CAST ($700)', 700))

//}
    
//generadorDatosPeliculas();    
    

//probando DESESTRUCTURACION DE OBJETOS 
//datosPeliculas.forEach(element => {
//
//    const {pelicula,value} = element;
//    const content = element.innerHTML;
    
    
//})
    
    

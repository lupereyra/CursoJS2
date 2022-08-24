//conecto con el DOM
const contenedor= document.querySelector('.contenedorDos');
const butacas= document.querySelectorAll('.fila .butaca:not(.ocupada)'); //selecciono solo las butacas que no estan ocupadas para operar con ellas
const contar= document.getElementById('contar');
const total=  document.getElementById('total');
const peliculaSeleccionada= document.getElementById('pelicula');

let precioTicket = parseInt(peliculaSeleccionada.value);
console.log(typeof precioTicket)

//array de objetos con las peliculas disponibles en cartelera
const datosPeliculas = [{pelicula:'Dragon Ball Super - 2D CAST ($700)', value: 700},
                        {pelicula: '30 noches con mi ex - 2D CAST ($600)', value:600},
                        {pelicula: 'Bestia - 2D CAST ($650)', value:650},
                        {pelicula: 'El perro samurai - 2D CAST ($700)', value:700},
                        {pelicula: 'Tren bala - 2D SUB ($730)', value:730},
                        {pelicula: 'La habitacion del horror -2D SUB ($750)', value:750},
                        {pelicula: 'Thor: Amor y trueno -2D CAST ($600)', value:600},
                        {pelicula: 'Minions: Nace un villano -2D CAST ($600)', value:600},
                        {pelicula: 'El telefono negro -2D CAST ($700)', value:700}]



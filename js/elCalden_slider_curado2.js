/*VENTANA(window) UNA VEZ CARGUE EL CONTENIDO QUIERO QUE EJECUTES ESTA FUNCION*/ 
const $imagenes_curado = document.getElementById('imagenes-curado');   // variable para guardar el elemento img del DOOM(html).
const $item_jamon_serrano = document.getElementById("item-jamon_serrano");
const $item_bondiola = document.getElementById("item-bondiola");
const $item_panceta = document.getElementById("item-panceta");

window.addEventListener('load',function(){               // Esta funcion iniciara en el momento que se carge la pagian.
    
    let indiceImagenes = 0;
    
    let arrayImagenes  = [];                              // Estamos creado un array para guardar las imagenes.
    arrayImagenes[0] = "img/jamon_serrano.jpg";              // imagen 1 guardada. 
    arrayImagenes[1] = "img/bondiola2.jpg";                 // Imagen 2 guardada.
    arrayImagenes[2] = "img/panceta2.jpg";                // imagen 3 guardada.

    function cambiarImagenes(){                          // Funcion que hara que cambie las imagenes.
        console.log ("setImagen");
        $imagenes_curado.setAttribute("src",arrayImagenes[indiceImagenes]);

        switch (indiceImagenes) {
            case 0:
                $item_jamon_serrano.classList.add("borde-sombreado");
                $item_panceta.classList.remove("borde-sombreado");
                indiceImagenes++;
                break;
            case 1:
                $item_jamon_serrano.classList.remove("borde-sombreado");
                $item_bondiola.classList.add("borde-sombreado");
                indiceImagenes++;
                break;
        
            default:
                $item_bondiola.classList.remove("borde-sombreado");
                $item_panceta.classList.add("borde-sombreado");
                indiceImagenes = 0;
                break;
        } 
    }
    setInterval(cambiarImagenes,8000);                   // Funcion de javascript para repetir una funcion en determinado tiempo.
    cambiarImagenes();
});
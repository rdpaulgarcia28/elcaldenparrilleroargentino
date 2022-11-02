/*VENTANA(window) UNA VEZ CARGUE EL CONTENIDO QUIERO QUE EJECUTES ESTA FUNCION*/ 
const $imagenes_embutido = document.getElementById('imagenes_embutidos');   // variable para guardar el elemento img del DOOM(html).
const $item_chorricitos = document.getElementById("item-chorricitos");
const $item_morsilla = document.getElementById("item-morsilla");
const $item_salamines = document.getElementById("item-salamines");
const $item_longaniza = document.getElementById("item-longaniza");

window.addEventListener('load',function(){               // Esta funcion iniciara en el momento que se carge la pagian.
    
    let indiceImagenes2 = 0;
    
    let arrayImagenes2  = [];                              // Estamos creado un array para guardar las imagenes.
    arrayImagenes2[0] = "img/chorricitos.jpg";              // imagen 1 guardada. 
    arrayImagenes2[1] = "img/morzilla.jpg";                 // Imagen 2 guardada.
    arrayImagenes2[2] = "img/salamin.jpg";                // imagen 3 guardada.
    arrayImagenes2[3] = "img/longaniza.jpg";                // imagen 4 guardada.

    function cambiarImagenesEmbutido(){                          // Funcion que hara que cambie las imagenes.
        console.log ("setImagen");
        $imagenes_embutido.setAttribute("src",arrayImagenes2[indiceImagenes2]);

        switch (indiceImagenes2) {
            case 0:
                $item_chorricitos.classList.add("borde-sombreado");
                $item_longaniza.classList.remove("borde-sombreado");
                indiceImagenes2++;
                break;
            case 1:
                $item_chorricitos.classList.remove("borde-sombreado");
                $item_morsilla.classList.add("borde-sombreado");
                indiceImagenes2++;
                break;
        
            case 2:
                $item_morsilla.classList.remove("borde-sombreado");
                $item_salamines.classList.add("borde-sombreado");
                indiceImagenes2++;
                break;

            default:
                $item_salamines.classList.remove("borde-sombreado");
                $item_longaniza.classList.add("borde-sombreado");
                indiceImagenes2 = 0;
                break;
        } 
    }
    setInterval(cambiarImagenesEmbutido,7000);                   // Funcion de javascript para repetir una funcion en determinado tiempo.
    cambiarImagenesEmbutido();
});
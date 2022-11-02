
/*VENTANA(window) UNA VEZ CARGUE EL CONTENIDO QUIERO QUE EJECUTES ESTA FUNCION*/ 
const $imagenes = document.getElementById('imagenes');   // variable para guardar el elemento img del DOOM(html).
const $item_1 = document.getElementById("item-1");
const $item_2 = document.getElementById("item-2");
const $item_3 = document.getElementById("item-3");

window.addEventListener('load',function(){               // Esta funcion iniciara en el momento que se carge la pagian.
    
    let indiceImagenes = 0;
    
    let arrayImagenes  = [];                              // Estamos creado un array para guardar las imagenes.
    arrayImagenes[0] = "img/chinchulin.jpg";              // imagen 1 guardada. 
    arrayImagenes[1] = "img/riñones.jpg";                 // Imagen 2 guardada.
    arrayImagenes[2] = "img/entrañas.jpg";                // imagen 3 guardada.

    function cambiarImagenes(){                          // Funcion que hara que cambie las imagenes.
        console.log ("setImagen");
        $imagenes.setAttribute("src",arrayImagenes[indiceImagenes]);

        switch (indiceImagenes) {
            case 0:
                $item_1.classList.add("borde-sombreado");
                $item_3.classList.remove("borde-sombreado");
                indiceImagenes++;
                break;
            case 1:
                $item_1.classList.remove("borde-sombreado");
                $item_2.classList.add("borde-sombreado");
                indiceImagenes++;
                break;
        
            default:
                $item_2.classList.remove("borde-sombreado");
                $item_3.classList.add("borde-sombreado");
                indiceImagenes = 0;
                break;
        } 
    }
    setInterval(cambiarImagenes,7000);                   // Funcion de javascript para repetir una funcion en determinado tiempo.
    cambiarImagenes();
});



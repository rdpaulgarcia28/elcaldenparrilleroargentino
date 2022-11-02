/*VENTANA(window) UNA VEZ CARGUE EL CONTENIDO QUIERO QUE EJECUTES ESTA FUNCION*/ 
const $imagenes_cortes = document.getElementById('imagenes-cortes');   // variable para guardar el elemento img del DOOM(html).
const $item_TiraAsado = document.getElementById("item-TiraAsado");
const $item_Vacio = document.getElementById("item-Vacio");
const $item_MatambreRes = document.getElementById("item-MatambreRes");
const $item_MatambreCerdo = document.getElementById("item-MatambreCerdo");
const $item_TapaAsado = document.getElementById("item-TapaAsado");
const $item_Bondiola = document.getElementById("item-Bondiola");

window.addEventListener('load',function(){               // Esta funcion iniciara en el momento que se carge la pagian.
    
    let indiceImagenes = 0;
    
    let arrayImagenes  = [];                              // Estamos creado un array para guardar las imagenes.
    arrayImagenes[0] = "img/tira-de-asado.jpg";              // imagen 1 guardada. 
    arrayImagenes[1] = "img/vacio.jpg";                 // Imagen 2 guardada.
    arrayImagenes[2] = "img/matambre-de-res.jpg";                // imagen 3 guardada.
    arrayImagenes[3] = "img/matambre-de-cerdo.jpg";                // imagen 3 guardada.
    arrayImagenes[4] = "img/tapa-de-asado.jpg";                // imagen 3 guardada.
    arrayImagenes[5] = "img/bondiola.jpg";                // imagen 3 guardada.

    function cambiarImagenes(){                          // Funcion que hara que cambie las imagenes.
        console.log ("setImagen");
        $imagenes_cortes.setAttribute("src",arrayImagenes[indiceImagenes]);

        switch (indiceImagenes) {
            case 0:
                $item_TiraAsado.classList.add("borde-sombreado");
                $item_Bondiola.classList.remove("borde-sombreado");
                indiceImagenes++;
                break;
            case 1:
                $item_TiraAsado.classList.remove("borde-sombreado");
                $item_Vacio.classList.add("borde-sombreado");
                indiceImagenes++;
                break;
            case 2:
                $item_Vacio.classList.remove("borde-sombreado");
                $item_MatambreRes.classList.add("borde-sombreado");
                indiceImagenes++;
                break;
            case 3:
                $item_MatambreRes.classList.remove("borde-sombreado");
                $item_MatambreCerdo.classList.add("borde-sombreado");
                indiceImagenes++;
                break;
            case 4:
                $item_MatambreCerdo.classList.remove("borde-sombreado");
                $item_TapaAsado.classList.add("borde-sombreado");
                indiceImagenes++;
                break;
        
            default:
                $item_TapaAsado.classList.remove("borde-sombreado");
                $item_Bondiola.classList.add("borde-sombreado");
                indiceImagenes = 0;
                break;
        } 
    }
    setInterval(cambiarImagenes,6000);                   // Funcion de javascript para repetir una funcion en determinado tiempo.
    cambiarImagenes();
});
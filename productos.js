// Constantes para el div contenedor de los inputs y el botón de agregar
const contenedor = document.querySelector('#dinamic');
const btnAgregar = document.querySelector('#agregar');

// Variable para el total de elementos agregados
let total = 1;

/**
 * Método que se ejecuta cuando se da clic al botón de agregar elementos
 */
btnAgregar.addEventListener('button', e => {
    let div = document.createElement('div');
    div.innerHTML = `<label>${total++}</label> - <div class="row gx-3 gy-2 align-items-center">
    <div class="col-sm-3">
    <input type="text" class="form-control" id="cantidad" placeholder="Cantidad" required> </div>
    <div class="col-sm-3">
    <input type="text" class="form-control" id="descripcion" placeholder="Descripcion" required> </div>
    <div class="col-sm-3">
    <input type="text" class="form-control" id="unitario" placeholder="P/unitario" required> </div>
    <div class="col-sm-3">
    <input type="text" class="form-control" id="importe" placeholder="Importe" required> </div></div>
    
    <br>  <button onclick="eliminar(this)">Eliminar</button>`;
    contenedor.appendChild(div);
})

/**
 * Método para eliminar el div contenedor del input
 * @param {this} e 
 */
const eliminar = (e) => {
    const divPadre = e.parentNode;
    contenedor.removeChild(divPadre);
    actualizarContador();
};

/**
 * Método para actualizar el contador de los elementos agregados
*/
const actualizarContador = () => {
    let divs = contenedor.children;
    total = 1;
    for (let i = 0; i < divs.length; i++) {
        divs[i].children[0].innerHTML = total++;
    }//end for
};
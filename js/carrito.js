let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito(){

    if(productosEnCarrito && productosEnCarrito.length > 0){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => { 
    
            const div = document.createElement("div")
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.img}" alt="imagen producto miniatura">
                    <div class="carrito-producto-titulo">
                        <small>Título</small>
                        <h3>${producto.nombre}</h3>
                    </div>
    
                     <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>${producto.precio}</p>
                    </div>
    
                    <div class="carrito-producto-cantidad">
                         <small>Cantidad</small>
                        <p>${producto.cantidad}</p>
                    </div>
    
                    <div class="carrito-producto-subtotal">
                        <small>Sub-Total</small>
                        <p>$${producto.precio * producto.cantidad}</p>
                    </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><img src="./images/iconos/trash-fill.svg" alt="basurero"></button>
            `;
            
            contenedorCarritoProductos.append(div);
        })
    
        }else{
    
            contenedorCarritoVacio.classList.remove("disabled");
            contenedorCarritoProductos.classList.add("disabled");
            contenedorCarritoAcciones.classList.add("disabled");
            contenedorCarritoComprado.classList.add("disabled");
    
        }

        actualizarBotonesEliminar();
        actualizarTotal();

}

cargarProductosCarrito();


function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
        
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito (e) {

    Toastify({
        text: "Producto Eliminado",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "black",
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
        },
        offset: {
            x: 45, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
   
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}


botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){

    Swal.fire({
        title: '¿Estás seguro?',
        text: "Se borrarán todos los productos.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'black',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar!'
      }).then((result) => {
        if (result.isConfirmed) {

            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();

          Swal.fire(
            'Borrados!',
            'Los productos han sido borrados.',
            'success'
          )
        }
      })


}

function actualizarTotal() {

    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){

    productosEnCarrito.length = 0;
    localStorage.setItem("producto-en-carrito", JSON.stringify(productosEnCarrito));
        
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

 }

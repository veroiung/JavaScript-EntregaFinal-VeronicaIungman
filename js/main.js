let productos = [];

fetch("./js/productos.json")
.then(response => response.json())
.then(data => {
    productos = data;
    cargarProductos(productos);


})



const tienda = document.getElementById("tienda");
let botonesAgregar = document.querySelectorAll(".btn-agregar")



let numerito = document.getElementById("numerito");

function cargarProductos() {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.innerHTML = `
                <div class="col mb-3">
                    <div class="card" id="${producto.id}"">
                            <img class="producto-imagen" src="${producto.img}" alt="${producto.nombre}">
                        <div class="card-body">
                            <h4 class="card-title"><strong>${producto.nombre}</strong></h4>
                            <h5 class="card-title">$ ${producto.precio}</h5>
                            <button type="button" class="btn-agregar" id="${producto.id}">+ Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
        `;

        tienda.append(div);
    })
    actualizarBotonesAgregar();
  
}

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".btn-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
;

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);

    actualizarNumerito();

} else {
productosEnCarrito = [];
}


function agregarAlCarrito(e){

    Toastify({
        text: "Producto Agregado",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", 
        position: "left", 
        stopOnFocus: true, 
        style: {
          background: "black",
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
        },
        offset: {
            x: 50, 
            y: 50 
          },
        onClick: function(){} 
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
         productosEnCarrito.push(productoAgregado);

    }
    actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

    function actualizarNumerito(){
        let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numerito.innerText = nuevoNumerito;

}

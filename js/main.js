
function Producto(id, nombre, img, precio) {
    this.id = id;
    this.nombre = nombre;
    this.img = img;
    this.precio = precio;

    this.imprimirProducto = function () {
        return "Esta es la identificacion" + (this.id) + "Este es el modelo " + (this.nombre) +  "La imagen " + (this.img) + " su precio es "(this.precio);
    }

}
let productos = []
productos.push(new Producto("denimceleste", "Denim Celeste", "./images/tienda/denim-celeste.jpg", 4700))
productos.push(new Producto("denimazul", "Denim Azul", "./images/tienda/denim-azul.jpg", 4700))
productos.push(new Producto("denimblanco", "Denim Blanco", "./images/tienda/denim-blanco.jpg", 4700))
productos.push(new Producto("denimnegro", "Denim Negro", "./images/tienda/denim-negro.jpg", 4700))
productos.push(new Producto("azulmarino", "Azul Marino", "./images/tienda/azul-marino.jpg", 3900))
productos.push(new Producto("borravino", "Borravino", "./images/tienda/borravino.jpg", 3900))
productos.push(new Producto("skinny", "Skinny", "./images/tienda/skinny.jpg", 3900))
productos.push(new Producto("oliva", "Oliva", "./images/tienda/oliva.jpg", 3900))
productos.push(new Producto("melmedio", "Mel Medio", "./images/tienda/mel-medio.jpg", 4800))
productos.push(new Producto("melclaro", "Mel Claro", "./images/tienda/mel-claro.jpg", 4800))
productos.push(new Producto("melcrudo", "Mel Crudo", "./images/tienda/mel-crudo.jpg", 4800))
productos.push(new Producto("negroviscosa", "Negro Viscosa", "./images/tienda/negro-viscosa.jpg", 5200))
productos.push(new Producto("negroflame", "Negro Flame", "./images/tienda/negro-flame.jpg", 5200))
productos.push(new Producto("petroleo", "Petroleo", "./images/tienda/petroleo.jpg", 3900))
productos.push(new Producto("nevado", "Nevado", "./images/tienda/nevado.jpg", 4500))
productos.push(new Producto("topo", "Topo", "./images/tienda/topo.jpg", 4500))

// const tienda = document.querySelector("#tienda"); //
const tienda = document.getElementById("tienda");
let botonesAgregar = document.querySelectorAll(".btn-agregar")

cargarProductos();

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







/*
function agregar(identificador) {
    for (let i=0; i<productos.length; i++) {
        if(identificador == productos[i].id){
            console.log(productos[i].nombre, productos[i].precio); 
            break;
        }
    }
}*/

